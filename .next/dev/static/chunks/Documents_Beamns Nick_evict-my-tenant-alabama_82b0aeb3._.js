(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/StepIndicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const STEPS = [
    {
        number: 1,
        label: 'Property'
    },
    {
        number: 2,
        label: 'Landlord'
    },
    {
        number: 3,
        label: 'Tenant'
    },
    {
        number: 4,
        label: 'Lease'
    },
    {
        number: 5,
        label: 'Reason'
    },
    {
        number: 6,
        label: 'Notice'
    },
    {
        number: 7,
        label: 'Review'
    }
];
function StepIndicator({ currentStep }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            overflowX: 'auto'
        },
        children: STEPS.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: '70px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            backgroundColor: step.number < currentStep ? '#10b981' : step.number === currentStep ? '#2563eb' : '#d1d5db',
                            color: step.number <= currentStep ? 'white' : '#6b7280'
                        },
                        children: step.number < currentStep ? '✓' : step.number
                    }, void 0, false, {
                        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/StepIndicator.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            marginTop: '4px',
                            fontSize: '12px',
                            color: step.number === currentStep ? '#2563eb' : '#6b7280',
                            fontWeight: step.number === currentStep ? 'bold' : 'normal'
                        },
                        children: step.label
                    }, void 0, false, {
                        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/StepIndicator.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, step.number, true, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/StepIndicator.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/StepIndicator.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = StepIndicator;
var _c;
__turbopack_context__.k.register(_c, "StepIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$StepIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/StepIndicator.tsx [app-client] (ecmascript)");
'use client';
;
;
function FormLayout({ children, currentStep, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            backgroundColor: '#f9fafb',
            padding: '2rem 1rem'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: '700px',
                margin: '0 auto'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$StepIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    currentStep: currentStep
                }, void 0, false, {
                    fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormLayout.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        padding: '2rem',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                color: '#111827'
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormLayout.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#6b7280',
                                marginBottom: '1.5rem',
                                fontSize: '14px'
                            },
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormLayout.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormLayout.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormLayout.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormLayout.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = FormLayout;
var _c;
__turbopack_context__.k.register(_c, "FormLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox,
    "SelectField",
    ()=>SelectField,
    "TextField",
    ()=>TextField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const labelStyle = {
    display: 'block',
    marginBottom: '4px',
    fontWeight: '600',
    fontSize: '14px',
    color: '#374151'
};
const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    fontSize: '16px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    outline: 'none'
};
const errorStyle = {
    color: '#dc2626',
    fontSize: '12px',
    marginTop: '4px'
};
const hintStyle = {
    color: '#6b7280',
    fontSize: '12px',
    marginTop: '4px'
};
function TextField({ label, error, hint, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: '1rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: labelStyle,
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                style: {
                    ...inputStyle,
                    borderColor: error ? '#dc2626' : '#d1d5db'
                },
                ...props
            }, void 0, false, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: errorStyle,
                children: error
            }, void 0, false, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
                lineNumber: 59,
                columnNumber: 17
            }, this),
            hint && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: hintStyle,
                children: hint
            }, void 0, false, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
                lineNumber: 60,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = TextField;
function SelectField({ label, options, error, hint, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: '1rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: labelStyle,
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                style: {
                    ...inputStyle,
                    borderColor: error ? '#dc2626' : '#d1d5db',
                    backgroundColor: 'white'
                },
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Select..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: opt.value,
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: errorStyle,
                children: error
            }, void 0, false, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
                lineNumber: 84,
                columnNumber: 17
            }, this),
            hint && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: hintStyle,
                children: hint
            }, void 0, false, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
                lineNumber: 85,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c1 = SelectField;
function Checkbox({ label, error, hint, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: '1rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        ...props,
                        style: {
                            width: '18px',
                            height: '18px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '14px',
                            color: '#374151'
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: errorStyle,
                children: error
            }, void 0, false, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
                lineNumber: 102,
                columnNumber: 17
            }, this),
            hint && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: hintStyle,
                children: hint
            }, void 0, false, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
                lineNumber: 103,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_c2 = Checkbox;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TextField");
__turbopack_context__.k.register(_c1, "SelectField");
__turbopack_context__.k.register(_c2, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/lib/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const current = getCurrentCase() || {
        id: generateId(),
        createdAt: new Date().toISOString(),
        status: 'draft'
    };
    const updated = {
        ...current,
        ...data
    };
    localStorage.setItem(CURRENT_CASE_KEY, JSON.stringify(updated));
}
function getCurrentCase() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const data = localStorage.getItem(CURRENT_CASE_KEY);
    return data ? JSON.parse(data) : null;
}
function clearCurrentCase() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem(CURRENT_CASE_KEY);
}
function saveCompletedCase(evictionCase) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const cases = getAllCases();
    cases.push({
        ...evictionCase,
        status: 'ready'
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
    clearCurrentCase();
}
function getAllCases() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}
function getCaseById(id) {
    const cases = getAllCases();
    return cases.find((c)=>c.id === id) || null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALABAMA_COUNTIES",
    ()=>ALABAMA_COUNTIES
]);
const ALABAMA_COUNTIES = [
    'Autauga',
    'Baldwin',
    'Barbour',
    'Bibb',
    'Blount',
    'Bullock',
    'Butler',
    'Calhoun',
    'Chambers',
    'Cherokee',
    'Chilton',
    'Choctaw',
    'Clarke',
    'Clay',
    'Cleburne',
    'Coffee',
    'Colbert',
    'Conecuh',
    'Coosa',
    'Covington',
    'Crenshaw',
    'Cullman',
    'Dale',
    'Dallas',
    'DeKalb',
    'Elmore',
    'Escambia',
    'Etowah',
    'Fayette',
    'Franklin',
    'Geneva',
    'Greene',
    'Hale',
    'Henry',
    'Houston',
    'Jackson',
    'Jefferson',
    'Lamar',
    'Lauderdale',
    'Lawrence',
    'Lee',
    'Limestone',
    'Lowndes',
    'Macon',
    'Madison',
    'Marengo',
    'Marion',
    'Marshall',
    'Mobile',
    'Monroe',
    'Montgomery',
    'Morgan',
    'Perry',
    'Pickens',
    'Pike',
    'Randolph',
    'Russell',
    'Shelby',
    'St. Clair',
    'Sumter',
    'Talladega',
    'Tallapoosa',
    'Tuscaloosa',
    'Walker',
    'Washington',
    'Wilcox',
    'Winston'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/new/property/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PropertyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$FormLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/FormField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/lib/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function PropertyPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        address: '',
        city: '',
        county: '',
        zip: '',
        propertyType: ''
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PropertyPage.useEffect": ()=>{
            const currentCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentCase"])();
            if (currentCase?.property) {
                setFormData({
                    address: currentCase.property.address || '',
                    city: currentCase.property.city || '',
                    county: currentCase.property.county || '',
                    zip: currentCase.property.zip || '',
                    propertyType: currentCase.property.propertyType || ''
                });
            }
        }
    }["PropertyPage.useEffect"], []);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        if (errors[name]) {
            setErrors((prev)=>({
                    ...prev,
                    [name]: ''
                }));
        }
    };
    const validate = ()=>{
        const newErrors = {};
        if (!formData.address.trim()) newErrors.address = 'Property address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.county) newErrors.county = 'County is required for filing';
        if (!formData.zip.trim()) newErrors.zip = 'ZIP code is required';
        if (!formData.propertyType) newErrors.propertyType = 'Property type is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleNext = ()=>{
        if (!validate()) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDraft"])({
            property: {
                address: formData.address,
                city: formData.city,
                county: formData.county,
                zip: formData.zip,
                propertyType: formData.propertyType
            }
        });
        router.push('/evictions/new/landlord');
    };
    const countyOptions = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALABAMA_COUNTIES"].map((c)=>({
            value: c,
            label: c
        }));
    const propertyTypeOptions = [
        {
            value: 'single-family',
            label: 'Single Family Home'
        },
        {
            value: 'apartment',
            label: 'Apartment'
        },
        {
            value: 'mobile-home',
            label: 'Mobile Home'
        },
        {
            value: 'other',
            label: 'Other'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$FormLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        currentStep: 1,
        title: "Property Details",
        description: "Enter the rental property address where the tenant resides.",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                label: "Street Address",
                name: "address",
                value: formData.address,
                onChange: handleChange,
                placeholder: "123 Main Street, Apt 4",
                error: errors.address
            }, void 0, false, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/new/property/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                        label: "City",
                        name: "city",
                        value: formData.city,
                        onChange: handleChange,
                        placeholder: "Birmingham",
                        error: errors.city
                    }, void 0, false, {
                        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/new/property/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                        label: "ZIP Code",
                        name: "zip",
                        value: formData.zip,
                        onChange: handleChange,
                        placeholder: "35203",
                        error: errors.zip
                    }, void 0, false, {
                        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/new/property/page.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/new/property/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectField"], {
                label: "County",
                name: "county",
                value: formData.county,
                onChange: handleChange,
                options: countyOptions,
                error: errors.county,
                hint: "The county determines which court will handle the filing."
            }, void 0, false, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/new/property/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectField"], {
                label: "Property Type",
                name: "propertyType",
                value: formData.propertyType,
                onChange: handleChange,
                options: propertyTypeOptions,
                error: errors.propertyType
            }, void 0, false, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/new/property/page.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '2rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onClick: handleNext,
                    children: "Next: Landlord Info →"
                }, void 0, false, {
                    fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/new/property/page.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/new/property/page.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Beamns Nick/evict-my-tenant-alabama/app/evictions/new/property/page.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(PropertyPage, "nCxiyPIyLwU9kAh6eoJnNzebgGw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PropertyPage;
var _c;
__turbopack_context__.k.register(_c, "PropertyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Beamns__Nick$2f$evict$2d$my$2d$tenant$2d$alabama$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Documents/Beamns Nick/evict-my-tenant-alabama/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Documents_Beamns%20Nick_evict-my-tenant-alabama_82b0aeb3._.js.map