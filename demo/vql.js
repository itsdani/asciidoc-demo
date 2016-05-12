/*
Language: Viatra query language
 */


function(hljs) {
    var ANNOTATION_MODE = {
        className: 'meta',
        begin: '@[A-Za-z]+'
    }

    var PARAMETER_MODE = {
        className: 'class',
        begin: /\(/, end: /\)/,
        types: 'transition',
        contains: [
            {
                className: 'paramType',
                begin: ':', end: ',',
                endsWithParent: true,
                contains: [
                    hljs.TITLE_MODE
                ]
            }
        ]
    }
    
    var PATTERN_BODY_MODE = {
        className: 'function',
        begin: '{', end: '}',
        keywords: 'check eval find neg',
        endsParent: true,
        contains: [
            {
                className: 'class',
                begin: /\b[A-Z]/, end: /[\.\(]/,
                returnBegin: true,
                contains: [
                    hljs.UNDERSCORE_TITLE_MODE,
                ]

            },
            {
                className: 'find',
                begin: 'find', end:';',
                excludeBegin: true,
                contains: [
                    PARAMETER_MODE,
                    hljs.UNDERSCORE_TITLE_MODE,
                ]
            },
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            hljs.C_NUMBER_MODE,
            hljs.C_BLOCK_COMMENT_MODE
        ]
    }

return {
    case_insensitive: false,
    literal: 'false true null',
        contains: [
            ANNOTATION_MODE,
            {
                className: 'pattern',
                beginKeywords: 'or pattern', end:'}',
                keywords: 'or pattern',
                contains: [
                    PATTERN_BODY_MODE,
                    PARAMETER_MODE,
                    hljs.UNDERSCORE_TITLE_MODE,
                    hljs.APOS_STRING_MODE,
                    hljs.QUOTE_STRING_MODE,
                    hljs.C_NUMBER_MODE,
                    hljs.C_BLOCK_COMMENT_MODE
                ]
            },
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
        ]
    }
}
