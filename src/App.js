import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001';
export default function App() {
    const [state, setState] = useState({ status: 'loading' });
    useEffect(() => {
        fetch(`${API_URL}/api/hello`)
            .then((res) => {
            if (!res.ok)
                throw new Error(`HTTP ${res.status}`);
            return res.json();
        })
            .then((data) => setState({ status: 'success', data }))
            .catch((err) => setState({ status: 'error', message: err instanceof Error ? err.message : 'Unknown error' }));
    }, []);
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-4", children: [_jsxs("div", { className: "bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl", children: [_jsxs("h1", { className: "text-2xl font-bold text-white mb-6 text-center", children: ["repoflow example ", _jsx("span", { className: "text-purple-300", children: "\u2014 hello" })] }), state.status === 'loading' && (_jsxs("div", { className: "flex items-center justify-center gap-3 text-purple-200", children: [_jsx("div", { className: "w-5 h-5 border-2 border-purple-300 border-t-transparent rounded-full animate-spin" }), _jsx("span", { children: "Fetching from API\u2026" })] })), state.status === 'success' && (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "bg-green-500/20 border border-green-400/30 rounded-xl p-4", children: [_jsx("p", { className: "text-green-200 text-sm font-medium mb-1", children: "Message" }), _jsx("p", { className: "text-white font-mono text-sm break-all", children: state.data.message })] }), _jsxs("div", { className: "bg-blue-500/20 border border-blue-400/30 rounded-xl p-4", children: [_jsx("p", { className: "text-blue-200 text-sm font-medium mb-1", children: "Timestamp" }), _jsx("p", { className: "text-white font-mono text-sm", children: state.data.timestamp })] })] })), state.status === 'error' && (_jsxs("div", { className: "bg-red-500/20 border border-red-400/30 rounded-xl p-4", children: [_jsx("p", { className: "text-red-200 text-sm font-medium mb-1", children: "Error" }), _jsx("p", { className: "text-white font-mono text-sm", children: state.message }), _jsxs("p", { className: "text-red-300 text-xs mt-2", children: ["Is the API running at ", _jsx("code", { className: "bg-red-900/50 px-1 rounded", children: API_URL }), "?"] })] }))] }), _jsxs("footer", { className: "mt-8 text-center text-white/40 text-xs", children: ["Powered by", ' ', _jsx("a", { href: "https://www.npmjs.com/package/@axelmth/repoflow", className: "text-purple-400 hover:text-purple-300 transition-colors", target: "_blank", rel: "noopener noreferrer", children: "@axelmth/repoflow" }), ' ', "\u2022", ' ', _jsx("a", { href: "https://github.com/axelmth/repoflow", className: "text-purple-400 hover:text-purple-300 transition-colors", target: "_blank", rel: "noopener noreferrer", children: "github.com/axelmth/repoflow" })] })] }));
}
