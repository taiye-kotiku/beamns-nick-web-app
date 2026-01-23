module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/lib/storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCurrentCase",
    ()=>clearCurrentCase,
    "generateId",
    ()=>generateId,
    "getAllCases",
    ()=>getAllCases,
    "getCaseById",
    ()=>getCaseById,
    "getCurrentCase",
    ()=>getCurrentCase,
    "saveCompletedCase",
    ()=>saveCompletedCase,
    "saveDraft",
    ()=>saveDraft
]);
const STORAGE_KEY = 'eviction_cases';
const CURRENT_CASE_KEY = 'current_eviction';
function generateId() {
    return `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
function saveDraft(data) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const current = undefined;
    const updated = undefined;
}
function getCurrentCase() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const data = undefined;
}
function clearCurrentCase() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function saveCompletedCase(evictionCase) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const cases = undefined;
}
function getAllCases() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const data = undefined;
}
function getCaseById(id) {
    const cases = getAllCases();
    return cases.find((c)=>c.id === id) || null;
}
}),
"[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function Button({ children, variant = 'primary', fullWidth = false, disabled, style, ...props }) {
    const baseStyle = {
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: '600',
        borderRadius: '6px',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        width: fullWidth ? '100%' : 'auto',
        transition: 'background-color 0.2s'
    };
    const variants = {
        primary: {
            backgroundColor: '#2563eb',
            color: 'white'
        },
        secondary: {
            backgroundColor: '#f3f4f6',
            color: '#374151',
            border: '1px solid #d1d5db'
        },
        danger: {
            backgroundColor: '#dc2626',
            color: 'white'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        style: {
            ...baseStyle,
            ...variants[variant],
            ...style
        },
        disabled: disabled,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/Button.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EvictionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/lib/storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function EvictionsPage() {
    const [cases, setCases] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCases((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllCases"])());
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            backgroundColor: '#f9fafb',
            padding: '2rem 1rem'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: '900px',
                margin: '0 auto'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '2rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                margin: 0,
                                fontSize: '1.75rem',
                                fontWeight: 'bold'
                            },
                            children: "My Eviction Cases"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/evictions/new",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: "+ New Eviction"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                cases.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        padding: '3rem',
                        textAlign: 'center',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: '1.1rem',
                                color: '#6b7280',
                                marginBottom: '1.5rem'
                            },
                            children: "You haven't started any eviction filings yet."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/evictions/new",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: "Start Your First Eviction"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    },
                    children: cases.map((evictionCase)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        margin: '0 0 0.5rem',
                                                        fontSize: '1.1rem'
                                                    },
                                                    children: evictionCase.property?.address || 'No address'
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: 0,
                                                        color: '#6b7280',
                                                        fontSize: '14px'
                                                    },
                                                    children: [
                                                        evictionCase.property?.city,
                                                        ", ",
                                                        evictionCase.property?.county,
                                                        " County"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: '0.5rem 0 0',
                                                        fontSize: '14px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Tenant:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        evictionCase.tenants?.[0]?.name || 'Unknown',
                                                        evictionCase.tenants && evictionCase.tenants.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                " (+",
                                                                evictionCase.tenants.length - 1,
                                                                " more)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: '0.25rem 0 0',
                                                        fontSize: '14px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Reason:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        formatReasonType(evictionCase.evictionReason?.type)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: 'right'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        display: 'inline-block',
                                                        padding: '4px 12px',
                                                        borderRadius: '9999px',
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        backgroundColor: evictionCase.status === 'ready' ? '#d1fae5' : '#e5e7eb',
                                                        color: evictionCase.status === 'ready' ? '#065f46' : '#374151'
                                                    },
                                                    children: evictionCase.status === 'ready' ? 'Ready to File' : 'Draft'
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: '0.5rem 0 0',
                                                        fontSize: '12px',
                                                        color: '#9ca3af'
                                                    },
                                                    children: [
                                                        "Created: ",
                                                        new Date(evictionCase.createdAt).toLocaleDateString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '0.75rem',
                                        marginTop: '1rem',
                                        paddingTop: '1rem',
                                        borderTop: '1px solid #e5e7eb'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/evictions/${evictionCase.id}/documents`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "primary",
                                            children: "View Documents"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, evictionCase.id, true, {
                            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                            lineNumber: 55,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
function formatReasonType(type) {
    const types = {
        'non-payment': 'Non-Payment of Rent',
        'holdover': 'Holdover',
        'lease-violation': 'Lease Violation',
        'other': 'Other'
    };
    return type ? types[type] || type : 'Not specified';
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__59fc3699._.js.map