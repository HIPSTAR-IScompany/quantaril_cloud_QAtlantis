// src/components/PayPalHostedButton.tsx
import React, { useEffect, useRef, useState } from 'react';

type PayPalHostedButtonProps = {
    hostedButtonId: string;
    containerId?: string; // 任意で指定。未指定なら自動生成
    className?: string;
};

type LoadState = 'loading' | 'ready' | 'error';

const PAYPAL_SDK_URL = 'https://www.paypal.com/sdk/js?client-id=BAAtig5X1urW0ewb5Hn3iEPaMPjuQ1QYYQ7m3k6Cacv_bsJejaQDRPNC7TINvhCIMaZ_txDGj6kU9A9xBQ&components=hosted-buttons&disable-funding=venmo&currency=JPY';

const PayPalHostedButton: React.FC<PayPalHostedButtonProps> = ({
    hostedButtonId,
    containerId,
    className,
}) => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [loadState, setLoadState] = useState<LoadState>('loading');
    const internalId = useRef(containerId || `paypal-container-${hostedButtonId}`);
    const rendered = useRef(false);

    // PayPalスクリプトを1度だけグローバルに読み込む
    useEffect(() => {
        // SSR環境では実行しない
        if (typeof window === 'undefined') return;
        if ((window as any).paypal?.HostedButtons) {
            setScriptLoaded(true);
            return;
        }

        // すでに読み込み中のスクリプトがあるかを確認
        const existingScript = document.querySelector<HTMLScriptElement>(
            `script[src="${PAYPAL_SDK_URL}"]`
        );
        if (existingScript) {
            const handleLoad = () => setScriptLoaded(true);
            const handleError = () => setLoadState('error');
            existingScript.addEventListener('load', handleLoad);
            existingScript.addEventListener('error', handleError);
            return () => {
                existingScript.removeEventListener('load', handleLoad);
                existingScript.removeEventListener('error', handleError);
            };
        }

        const script = document.createElement('script');
        script.src = PAYPAL_SDK_URL;
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        script.onerror = () => setLoadState('error');
        document.body.appendChild(script);

        return () => {
            script.onload = null;
            script.onerror = null;
        };
    }, []);

    // PayPalボタンのレンダリング
    useEffect(() => {
        if (!scriptLoaded || !(window as any).paypal?.HostedButtons || rendered.current) return;

        rendered.current = true;

        try {
            const renderResult = (window as any).paypal.HostedButtons({
                hostedButtonId,
            }).render(`#${internalId.current}`);

            Promise.resolve(renderResult)
                .then(() => setLoadState('ready'))
                .catch(() => setLoadState('error'));
        } catch {
            setLoadState('error');
        }
    }, [scriptLoaded, hostedButtonId]);

    return (
        <div className={className} data-paypal-state={loadState} aria-live="polite">
            <div id={internalId.current} aria-busy={loadState === 'loading'} />
            {loadState === 'loading' && <p role="status">支援フォームを読み込んでいます…</p>}
            {loadState === 'error' && (
                <p role="alert">
                    PayPal支援フォームを読み込めませんでした。通信状態を確認して再読み込みするか、
                    <a href="https://x.com/K_chachamaru">Xの窓口</a>をご利用ください。
                </p>
            )}
        </div>
    );
};

export default PayPalHostedButton;
