require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6799:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const { WebClient } = __nccwpck_require__(5105);

module.exports = async function lookupUser(core) {
    try {
        // Read token from the environment variables
        const token = process.env.SLACK_BOT_TOKEN;
  
        if (token === undefined || token.length === 0) {
            throw new Error('No Slack token provided in env vars');
        }

        const email = core.getInput('email');
        core.info(`Lookup Slack user by email: ${email}`);
    
        const slackClient = new WebClient(token);
        const result = await slackClient.users.lookupByEmail({
            email: email
        });

        if (!result.ok) {
            throw new Error(result.error);
        }
    
        core.info(`Successfully found Slack user: ${result.user.name}`);
        core.debug(`Slack user: ${JSON.stringify(result.user)}`);
        core.setOutput('user', result.user);

    } catch (error) {
        core.setFailed(error.message);
    }
};

/***/ }),

/***/ 9234:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConsoleLogger = exports.LogLevel = void 0;
/**
 * Severity levels for log entries
 */
var LogLevel;
(function (LogLevel) {
    LogLevel["ERROR"] = "error";
    LogLevel["WARN"] = "warn";
    LogLevel["INFO"] = "info";
    LogLevel["DEBUG"] = "debug";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
/**
 * Default logger which logs to stdout and stderr
 */
class ConsoleLogger {
    /** Setting for level */
    level;
    /** Name */
    name;
    /** Map of labels for each log level */
    static labels = (() => {
        const entries = Object.entries(LogLevel);
        const map = entries.map(([key, value]) => [value, `[${key}] `]);
        return new Map(map);
    })();
    /** Map of severity as comparable numbers for each log level */
    static severity = {
        [LogLevel.ERROR]: 400,
        [LogLevel.WARN]: 300,
        [LogLevel.INFO]: 200,
        [LogLevel.DEBUG]: 100,
    };
    constructor() {
        this.level = LogLevel.INFO;
        this.name = '';
    }
    getLevel() {
        return this.level;
    }
    /**
     * Sets the instance's log level so that only messages which are equal or more severe are output to the console.
     */
    setLevel(level) {
        this.level = level;
    }
    /**
     * Set the instance's name, which will appear on each log line before the message.
     */
    setName(name) {
        this.name = name;
    }
    /**
     * Log a debug message
     */
    // biome-ignore lint/suspicious/noExplicitAny: can log anything
    debug(...msg) {
        if (ConsoleLogger.isMoreOrEqualSevere(LogLevel.DEBUG, this.level)) {
            console.debug(ConsoleLogger.labels.get(LogLevel.DEBUG), this.name, ...msg);
        }
    }
    /**
     * Log an info message
     */
    // biome-ignore lint/suspicious/noExplicitAny: can log anything
    info(...msg) {
        if (ConsoleLogger.isMoreOrEqualSevere(LogLevel.INFO, this.level)) {
            console.info(ConsoleLogger.labels.get(LogLevel.INFO), this.name, ...msg);
        }
    }
    /**
     * Log a warning message
     */
    // biome-ignore lint/suspicious/noExplicitAny: can log anything
    warn(...msg) {
        if (ConsoleLogger.isMoreOrEqualSevere(LogLevel.WARN, this.level)) {
            console.warn(ConsoleLogger.labels.get(LogLevel.WARN), this.name, ...msg);
        }
    }
    /**
     * Log an error message
     */
    // biome-ignore lint/suspicious/noExplicitAny: can log anything
    error(...msg) {
        if (ConsoleLogger.isMoreOrEqualSevere(LogLevel.ERROR, this.level)) {
            console.error(ConsoleLogger.labels.get(LogLevel.ERROR), this.name, ...msg);
        }
    }
    /**
     * Helper to compare two log levels and determine if a is equal or more severe than b
     */
    static isMoreOrEqualSevere(a, b) {
        return ConsoleLogger.severity[a] >= ConsoleLogger.severity[b];
    }
}
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4591:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// This file contains objects documented here: https://docs.slack.dev/reference/block-kit/block-elements
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=block-elements.js.map

/***/ }),

/***/ 1356:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=blocks.js.map

/***/ }),

/***/ 3819:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// This file contains objects documented here: https://docs.slack.dev/reference/block-kit/composition-objects
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=composition-objects.js.map

/***/ }),

/***/ 4148:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=extensions.js.map

/***/ }),

/***/ 9110:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// These types represent users in Slack Calls, which is an API for showing 3rd party calls within the Slack client.
// More information on the API guide for Calls: https://docs.slack.dev/apis/web-api/using-the-calls-api
// and on User objects for use with Calls: https://docs.slack.dev/apis/web-api/using-the-calls-api
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=calls.js.map

/***/ }),

/***/ 3234:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=chunk.js.map

/***/ }),

/***/ 5523:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=dialog.js.map

/***/ }),

/***/ 4816:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=agent.js.map

/***/ }),

/***/ 4854:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=app.js.map

/***/ }),

/***/ 2149:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=assistant.js.map

/***/ }),

/***/ 6077:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=call.js.map

/***/ }),

/***/ 674:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=channel.js.map

/***/ }),

/***/ 3147:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=dnd.js.map

/***/ }),

/***/ 245:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=email.js.map

/***/ }),

/***/ 9679:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 9335:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// NOTE: `file_comment_added` and `file_comment_edited` are left out because they are discontinued
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=file.js.map

/***/ }),

/***/ 365:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=function.js.map

/***/ }),

/***/ 9660:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=grid-migration.js.map

/***/ }),

/***/ 6850:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=group.js.map

/***/ }),

/***/ 7783:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=im.js.map

/***/ }),

/***/ 4573:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(4816), exports);
__exportStar(__nccwpck_require__(4854), exports);
__exportStar(__nccwpck_require__(2149), exports);
__exportStar(__nccwpck_require__(6077), exports);
__exportStar(__nccwpck_require__(674), exports);
__exportStar(__nccwpck_require__(3147), exports);
__exportStar(__nccwpck_require__(245), exports);
__exportStar(__nccwpck_require__(9679), exports);
__exportStar(__nccwpck_require__(9335), exports);
__exportStar(__nccwpck_require__(365), exports);
__exportStar(__nccwpck_require__(9660), exports);
__exportStar(__nccwpck_require__(6850), exports);
__exportStar(__nccwpck_require__(7783), exports);
__exportStar(__nccwpck_require__(8324), exports);
__exportStar(__nccwpck_require__(2199), exports);
__exportStar(__nccwpck_require__(495), exports);
__exportStar(__nccwpck_require__(6286), exports);
__exportStar(__nccwpck_require__(1710), exports);
__exportStar(__nccwpck_require__(5710), exports);
__exportStar(__nccwpck_require__(4178), exports);
__exportStar(__nccwpck_require__(7662), exports);
__exportStar(__nccwpck_require__(7145), exports);
__exportStar(__nccwpck_require__(8064), exports);
__exportStar(__nccwpck_require__(8974), exports);
__exportStar(__nccwpck_require__(5876), exports);
__exportStar(__nccwpck_require__(6000), exports);
__exportStar(__nccwpck_require__(5906), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8324:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=invite.js.map

/***/ }),

/***/ 2199:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=link-shared.js.map

/***/ }),

/***/ 495:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=member.js.map

/***/ }),

/***/ 1710:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=message-metadata.js.map

/***/ }),

/***/ 6286:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=message.js.map

/***/ }),

/***/ 5710:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=pin.js.map

/***/ }),

/***/ 4178:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=reaction.js.map

/***/ }),

/***/ 7662:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=shared-channel.js.map

/***/ }),

/***/ 7145:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=star.js.map

/***/ }),

/***/ 8064:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=steps-from-apps.js.map

/***/ }),

/***/ 8974:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=subteam.js.map

/***/ }),

/***/ 5876:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=team.js.map

/***/ }),

/***/ 6000:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=token.js.map

/***/ }),

/***/ 5906:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=user.js.map

/***/ }),

/***/ 4775:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(4591), exports);
__exportStar(__nccwpck_require__(1356), exports);
__exportStar(__nccwpck_require__(3819), exports);
__exportStar(__nccwpck_require__(4148), exports);
__exportStar(__nccwpck_require__(9110), exports);
__exportStar(__nccwpck_require__(3234), exports);
__exportStar(__nccwpck_require__(5523), exports);
__exportStar(__nccwpck_require__(4573), exports);
__exportStar(__nccwpck_require__(5723), exports);
__exportStar(__nccwpck_require__(9380), exports);
__exportStar(__nccwpck_require__(7445), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5723:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=message-attachments.js.map

/***/ }),

/***/ 9380:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomFieldType = exports.EntityType = void 0;
var EntityType;
(function (EntityType) {
    EntityType["Task"] = "slack#/entities/task";
    EntityType["File"] = "slack#/entities/file";
    EntityType["Item"] = "slack#/entities/item";
    EntityType["Incident"] = "slack#/entities/incident";
    EntityType["ContentItem"] = "slack#/entities/content_item";
})(EntityType || (exports.EntityType = EntityType = {}));
var CustomFieldType;
(function (CustomFieldType) {
    CustomFieldType["Integer"] = "integer";
    CustomFieldType["String"] = "string";
    CustomFieldType["Array"] = "array";
    CustomFieldType["Date"] = "slack#/types/date";
    CustomFieldType["Timestamp"] = "slack#/types/timestamp";
    CustomFieldType["Image"] = "slack#/types/image";
    CustomFieldType["ChannelId"] = "slack#/types/channel_id";
    CustomFieldType["User"] = "slack#/types/user";
    CustomFieldType["EntityRef"] = "slack#/types/entity_ref";
    CustomFieldType["Boolean"] = "boolean";
    CustomFieldType["Link"] = "slack#/types/link";
    CustomFieldType["Email"] = "slack#/types/email";
})(CustomFieldType || (exports.CustomFieldType = CustomFieldType = {}));
//# sourceMappingURL=message-metadata.js.map

/***/ }),

/***/ 7445:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=views.js.map

/***/ }),

/***/ 4048:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebClient = exports.WebClientEvent = void 0;
exports.buildThreadTsWarningMessage = buildThreadTsWarningMessage;
const node_path_1 = __nccwpck_require__(6760);
const node_querystring_1 = __nccwpck_require__(1792);
const node_util_1 = __nccwpck_require__(7975);
const node_zlib_1 = __importDefault(__nccwpck_require__(8522));
const p_queue_1 = __importDefault(__nccwpck_require__(6459));
const p_retry_1 = __importStar(__nccwpck_require__(2103));
const chat_stream_1 = __nccwpck_require__(7760);
const errors_1 = __nccwpck_require__(8486);
const file_upload_1 = __nccwpck_require__(2577);
const helpers_1 = __importDefault(__nccwpck_require__(4060));
const instrument_1 = __nccwpck_require__(9224);
const logger_1 = __nccwpck_require__(4385);
const methods_1 = __nccwpck_require__(9339);
const retry_policies_1 = __nccwpck_require__(1766);
/*
 * Helpers
 */
const defaultFilename = 'Untitled';
const defaultPageSize = 200;
const noopPageReducer = () => undefined;
var WebClientEvent;
(function (WebClientEvent) {
    // TODO: safe to rename this to conform to PascalCase enum type naming convention?
    WebClientEvent["RATE_LIMITED"] = "rate_limited";
})(WebClientEvent || (exports.WebClientEvent = WebClientEvent = {}));
/**
 * A client for Slack's Web API
 *
 * This client provides an alias for each {@link https://docs.slack.dev/reference/methods|Web API method}. Each method is
 * a convenience wrapper for calling the {@link WebClient#apiCall} method using the method name as the first parameter.
 */
class WebClient extends methods_1.Methods {
    /**
     * The base URL for reaching Slack's Web API. Consider changing this value for testing purposes.
     */
    slackApiUrl;
    /**
     * Authentication and authorization token for accessing Slack Web API (usually begins with `xoxp` or `xoxb`)
     */
    token;
    /**
     * Configuration for retry operations. See {@link https://github.com/tim-kos/node-retry|node-retry} for more details.
     */
    retryConfig;
    /**
     * Queue of requests in which a maximum of {@link WebClientOptions.maxRequestConcurrency} can concurrently be
     * in-flight.
     */
    requestQueue;
    /**
     * The fetch function used for HTTP requests
     */
    fetchFn;
    /**
     * Request timeout in milliseconds
     */
    timeout;
    /**
     * Default headers sent with every request
     */
    defaultHeaders;
    /**
     * Preference for immediately rejecting API calls which result in a rate-limited response
     */
    rejectRateLimitedCalls;
    /**
     * The name used to prefix all logging generated from this object
     */
    static loggerName = 'WebClient';
    /**
     * This object's logger instance
     */
    logger;
    /**
     * This object's teamId value
     */
    teamId;
    allowAbsoluteUrls;
    /**
     * @param token - An API token to authenticate/authorize with Slack (usually start with `xoxp`, `xoxb`)
     * @param {Object} [webClientOptions] - Configuration options.
     */
    constructor(token, { slackApiUrl = 'https://slack.com/api/', logger = undefined, logLevel = undefined, maxRequestConcurrency = 100, retryConfig = retry_policies_1.tenRetriesInAboutThirtyMinutes, fetch = undefined, timeout = 0, rejectRateLimitedCalls = false, headers = {}, teamId = undefined, allowAbsoluteUrls = true, } = {}) {
        super();
        this.token = token;
        this.slackApiUrl = slackApiUrl;
        if (!this.slackApiUrl.endsWith('/')) {
            this.slackApiUrl += '/';
        }
        this.retryConfig = retryConfig;
        this.requestQueue = new p_queue_1.default({ concurrency: maxRequestConcurrency });
        this.rejectRateLimitedCalls = rejectRateLimitedCalls;
        this.teamId = teamId;
        this.allowAbsoluteUrls = allowAbsoluteUrls;
        // Logging
        if (typeof logger !== 'undefined') {
            this.logger = logger;
            if (typeof logLevel !== 'undefined') {
                this.logger.debug('The logLevel given to WebClient was ignored as you also gave logger');
            }
        }
        else {
            this.logger = (0, logger_1.getLogger)(WebClient.loggerName, logLevel ?? logger_1.LogLevel.INFO, logger);
        }
        if (this.token && !headers.Authorization)
            headers.Authorization = `Bearer ${this.token}`;
        this.fetchFn = fetch ?? globalThis.fetch;
        this.timeout = timeout;
        this.defaultHeaders = { 'User-Agent': (0, instrument_1.getUserAgent)(), Accept: 'application/json', ...headers };
        this.logger.debug('initialized');
    }
    /**
     * Generic method for calling a Web API method
     * @param method - the Web API method to call {@link https://docs.slack.dev/reference/methods}
     * @param options - arguments for the Web API method
     */
    async apiCall(method, options = {}) {
        this.logger.debug(`apiCall('${method}') start`);
        warnDeprecations(method, this.logger);
        warnIfFallbackIsMissing(method, this.logger, options);
        warnIfThreadTsIsNotString(method, this.logger, options);
        if (typeof options === 'string' || typeof options === 'number' || typeof options === 'boolean') {
            throw new TypeError(`Expected an options argument but instead received a ${typeof options}`);
        }
        // @ts-expect-error insufficient overlap between Record and FilesUploadV2Arguments
        if (method === 'files.uploadV2')
            return this.filesUploadV2(options);
        const headers = {};
        if (options.token)
            headers.Authorization = `Bearer ${options.token}`;
        const url = this.deriveRequestUrl(method);
        const response = await this.makeRequest(url, {
            team_id: this.teamId,
            ...options,
        }, headers);
        const result = await this.buildResult(response);
        this.logger.debug(`http request result: ${JSON.stringify(redact(result))}`);
        // log warnings in response metadata
        if (result.response_metadata !== undefined && result.response_metadata.warnings !== undefined) {
            result.response_metadata.warnings.forEach(this.logger.warn.bind(this.logger));
        }
        // log warnings and errors in response metadata messages
        // related to https://docs.slack.dev/changelog/2016/09/28/response-metadata-is-on-the-way
        if (result.response_metadata !== undefined && result.response_metadata.messages !== undefined) {
            for (const msg of result.response_metadata.messages) {
                const errReg = /\[ERROR\](.*)/;
                const warnReg = /\[WARN\](.*)/;
                if (errReg.test(msg)) {
                    const errMatch = msg.match(errReg);
                    if (errMatch != null) {
                        this.logger.error(errMatch[1].trim());
                    }
                }
                else if (warnReg.test(msg)) {
                    const warnMatch = msg.match(warnReg);
                    if (warnMatch != null) {
                        this.logger.warn(warnMatch[1].trim());
                    }
                }
            }
        }
        // If result's content is gzip, "ok" property is not returned with successful response
        // TODO: look into simplifying this code block to only check for the second condition
        // if an { ok: false } body applies for all API errors
        if (!result.ok && response.headers.get('content-type') !== 'application/gzip') {
            throw new errors_1.WebAPIPlatformError(result);
        }
        if ('ok' in result && result.ok === false) {
            throw new errors_1.WebAPIPlatformError(result);
        }
        this.logger.debug(`apiCall('${method}') end`);
        return result;
    }
    paginate(method, options, shouldStop, reduce) {
        const pageSize = (() => {
            if (options !== undefined && typeof options.limit === 'number') {
                const { limit } = options;
                options.limit = undefined;
                return limit;
            }
            return defaultPageSize;
        })();
        async function* generatePages() {
            // when result is undefined, that signals that the first of potentially many calls has not yet been made
            let result;
            // paginationOptions stores pagination options not already stored in the options argument
            let paginationOptions = {
                limit: pageSize,
            };
            if (options !== undefined && options.cursor !== undefined) {
                paginationOptions.cursor = options.cursor;
            }
            // NOTE: test for the situation where you're resuming a pagination using and existing cursor
            while (result === undefined || paginationOptions !== undefined) {
                result = await this.apiCall(method, Object.assign(options !== undefined ? options : {}, paginationOptions));
                yield result;
                paginationOptions = paginationOptionsForNextPage(result, pageSize);
            }
        }
        if (shouldStop === undefined) {
            return generatePages.call(this);
        }
        const pageReducer = reduce !== undefined ? reduce : noopPageReducer;
        let index = 0;
        return (async () => {
            // Unroll the first iteration of the iterator
            // This is done primarily because in order to satisfy the type system, we need a variable that is typed as A
            // (shown as accumulator before), but before the first iteration all we have is a variable typed A | undefined.
            // Unrolling the first iteration allows us to deal with undefined as a special case.
            const pageIterator = generatePages.call(this);
            const firstIteratorResult = await pageIterator.next(undefined);
            // Assumption: there will always be at least one result in a paginated API request
            // if (firstIteratorResult.done) { return; }
            const firstPage = firstIteratorResult.value;
            let accumulator = pageReducer(undefined, firstPage, index);
            index += 1;
            if (shouldStop(firstPage)) {
                return accumulator;
            }
            // Continue iteration
            for await (const page of pageIterator) {
                accumulator = pageReducer(accumulator, page, index);
                if (shouldStop(page)) {
                    return accumulator;
                }
                index += 1;
            }
            return accumulator;
        })();
    }
    /**
     * Stream markdown text into a conversation.
     *
     * @description The "chatStream" method starts a new chat stream in a conversation that can be appended to. After appending an entire message, the stream can be stopped with concluding arguments such as "blocks" for gathering feedback.
     *
     * The "markdown_text" content is appended to a buffer before being sent to the recipient, with a default buffer size of "256" characters. Setting the "buffer_size" value to a smaller number sends more frequent updates for the same amount of characters, but might reach rate limits more often.
     *
     * @example
     * const streamer = client.chatStream({
     *   channel: "C0123456789",
     *   thread_ts: "1700000001.123456",
     *   recipient_team_id: "T0123456789",
     *   recipient_user_id: "U0123456789",
     * });
     * await streamer.append({
     *   markdown_text: "**hello wo",
     * });
     * await streamer.append({
     *   markdown_text: "rld!**",
     * });
     * await streamer.stop();
     *
     * @see {@link https://docs.slack.dev/reference/methods/chat.startStream}
     * @see {@link https://docs.slack.dev/reference/methods/chat.appendStream}
     * @see {@link https://docs.slack.dev/reference/methods/chat.stopStream}
     */
    chatStream(params) {
        const { buffer_size, ...args } = params;
        const options = {
            buffer_size,
        };
        return new chat_stream_1.ChatStreamer(this, this.logger, args, options);
    }
    /**
     * This wrapper method provides an easy way to upload files using the following endpoints:
     *
     * **#1**: For each file submitted with this method, submit filenames
     * and file metadata to {@link https://docs.slack.dev/reference/methods/files.getuploadurlexternal files.getUploadURLExternal} to request a URL to
     * which to send the file data to and an id for the file
     *
     * **#2**: for each returned file `upload_url`, upload corresponding file to
     * URLs returned from step 1 (e.g. https://files.slack.com/upload/v1/...\")
     *
     * **#3**: Complete uploads {@link https://docs.slack.dev/reference/methods/files.completeuploadexternal files.completeUploadExternal}
     * @param options
     */
    async filesUploadV2(options) {
        this.logger.debug('files.uploadV2() start');
        // 1
        const fileUploads = await this.getAllFileUploads(options);
        const fileUploadsURLRes = await this.fetchAllUploadURLExternal(fileUploads);
        // set the upload_url and file_id returned from Slack
        fileUploadsURLRes.forEach((res, idx) => {
            fileUploads[idx].upload_url = res.upload_url;
            fileUploads[idx].file_id = res.file_id;
        });
        // 2
        await this.postFileUploadsToExternalURL(fileUploads, options);
        // 3
        const completion = await this.completeFileUploads(fileUploads);
        return { ok: true, files: completion };
    }
    /**
     * For each file submitted with this method, submits filenames
     * and file metadata to files.getUploadURLExternal to request a URL to
     * which to send the file data to and an id for the file
     * @param fileUploads
     */
    async fetchAllUploadURLExternal(fileUploads) {
        return Promise.all(fileUploads.map((upload) => {
            const options = {
                filename: upload.filename,
                length: upload.length,
                alt_text: upload.alt_text,
                snippet_type: upload.snippet_type,
            };
            if ('token' in upload) {
                options.token = upload.token;
            }
            return this.files.getUploadURLExternal(options);
        }));
    }
    /**
     * Complete uploads.
     * @param fileUploads
     * @returns
     */
    async completeFileUploads(fileUploads) {
        const toComplete = Object.values((0, file_upload_1.getAllFileUploadsToComplete)(fileUploads));
        return Promise.all(toComplete.map((job) => this.files.completeUploadExternal(job)));
    }
    /**
     * for each returned file upload URL, upload corresponding file
     * @param fileUploads
     * @returns
     */
    async postFileUploadsToExternalURL(fileUploads, options) {
        return Promise.all(fileUploads.map(async (upload) => {
            const { upload_url, file_id, filename, data } = upload;
            // either file or content will be defined
            const body = data;
            // try to post to external url
            if (upload_url) {
                const headers = {};
                if (options.token)
                    headers.Authorization = `Bearer ${options.token}`;
                const uploadRes = await this.makeRequest(upload_url, {
                    body,
                }, headers);
                if (uploadRes.status !== 200) {
                    return Promise.reject(Error(`Failed to upload file (id:${file_id}, filename: ${filename})`));
                }
                const responseBody = await uploadRes.text();
                const returnData = { ok: true, body: responseBody };
                return Promise.resolve(returnData);
            }
            return Promise.reject(Error(`No upload url found for file (id: ${file_id}, filename: ${filename}`));
        }));
    }
    /**
     * @param options All file uploads arguments
     * @returns An array of file upload entries
     */
    async getAllFileUploads(options) {
        let fileUploads = [];
        // add single file data to uploads if file or content exists at the top level
        if ('file' in options || 'content' in options) {
            fileUploads.push(await (0, file_upload_1.getFileUploadJob)(options, this.logger));
        }
        // add multiple files data when file_uploads is supplied
        if ('file_uploads' in options) {
            fileUploads = fileUploads.concat(await (0, file_upload_1.getMultipleFileUploadJobs)(options, this.logger));
        }
        return fileUploads;
    }
    /**
     * Low-level function to make a single API request. handles queuing, retries, and http-level errors
     */
    async makeRequest(url, body, headers = {}) {
        const task = () => this.requestQueue.add(async () => {
            // apps.event.authorizations.list will reject HTTP requests that send token in the body
            // TODO: consider applying this change to all methods - though that will require thorough integration testing
            if (url.endsWith('/apps.event.authorizations.list')) {
                body.token = undefined;
            }
            this.logger.debug(`http request url: ${url}`);
            this.logger.debug(`http request body: ${JSON.stringify(redact(body))}`);
            const { serializedBody, contentHeaders } = this.serializeBody(body);
            const allHeaders = { ...this.defaultHeaders, ...contentHeaders, ...headers };
            this.logger.debug(`http request headers: ${JSON.stringify(redact(allHeaders))}`);
            const signal = this.timeout > 0 ? AbortSignal.timeout(this.timeout) : undefined;
            try {
                const response = await this.fetchFn(url, {
                    method: 'POST',
                    headers: allHeaders,
                    body: serializedBody,
                    redirect: 'error',
                    signal,
                });
                this.logger.debug('http response received');
                if (response.status === 429) {
                    const retrySec = parseRetryHeaders(response);
                    if (retrySec !== undefined) {
                        this.emit(WebClientEvent.RATE_LIMITED, retrySec, { url, body });
                        if (this.rejectRateLimitedCalls) {
                            throw new p_retry_1.AbortError(new errors_1.WebAPIRateLimitedError(retrySec));
                        }
                        this.logger.info(`API Call failed due to rate limiting. Will retry in ${retrySec} seconds.`);
                        // pause the request queue and then delay the rejection by the amount of time in the retry header
                        this.requestQueue.pause();
                        // NOTE: if there was a way to introspect the current RetryOperation and know what the next timeout
                        // would be, then we could subtract that time from the following delay, knowing that the next
                        // attempt still wouldn't occur until after the rate-limit header has specified. An even better
                        // solution would be to subtract the time from only the timeout of this next attempt of the
                        // RetryOperation. This would result in staying paused for the entire duration specified in the
                        // header, yet this operation not having to pay the timeout cost in addition to that.
                        await (0, helpers_1.default)(retrySec * 1000);
                        // resume the request queue and throw a non-abort error to signal a retry
                        this.requestQueue.start();
                        // TODO: We may want to have more detailed info such as team_id, params except tokens, and so on.
                        throw new Error(`A rate limit was exceeded (url: ${url}, retry-after: ${retrySec})`);
                    }
                    // TODO: turn this into some CodedError
                    throw new p_retry_1.AbortError(new Error(`Retry header did not contain a valid timeout (url: ${url}, retry-after header: ${response.headers.get('retry-after')})`));
                }
                // Slack's Web API doesn't use meaningful status codes besides 429 and 200
                if (response.status !== 200) {
                    const responseBody = await response.text();
                    throw new errors_1.WebAPIHTTPError(response.status, response.statusText, Object.fromEntries(response.headers.entries()), responseBody);
                }
                return response;
            }
            catch (error) {
                if (error instanceof p_retry_1.AbortError) {
                    throw error;
                }
                if (error instanceof errors_1.SlackError) {
                    throw error;
                }
                const message = error instanceof Error ? error.message : String(error);
                this.logger.warn('http request failed', message);
                throw new errors_1.WebAPIRequestError(error instanceof Error ? error : new Error(String(error)));
            }
        });
        return (0, p_retry_1.default)(task, this.retryConfig);
    }
    /**
     * Get the complete request URL for the provided URL.
     * @param url - The resource to POST to. Either a Slack API method or absolute URL.
     */
    deriveRequestUrl(url) {
        const isAbsoluteURL = url.startsWith('https://') || url.startsWith('http://');
        if (isAbsoluteURL && this.allowAbsoluteUrls) {
            return url;
        }
        return `${this.slackApiUrl}${url}`;
    }
    /**
     * Transforms a key-value object into a serialized body suitable for fetch.
     * Flattens complex objects into JSON-encoded strings, detects binary content,
     * and returns either a FormData (for binary uploads) or a URL-encoded string,
     * along with any content-type headers that should be set.
     */
    serializeBody(data) {
        let containsBinaryData = false;
        // biome-ignore lint/suspicious/noExplicitAny: HTTP request data can be anything
        const flattened = Object.entries(data).map(([key, value]) => {
            if (value === undefined || value === null) {
                return [];
            }
            let serializedValue = value;
            if (Buffer.isBuffer(value)) {
                containsBinaryData = true;
            }
            else if (typeof value !== 'string' && typeof value !== 'number' && typeof value !== 'boolean') {
                // if value is anything other than string, number, boolean, binary data, a Stream, or a Buffer, then encode it
                // as a JSON string.
                serializedValue = JSON.stringify(value);
            }
            return [key, serializedValue];
        });
        // A body with binary content should be serialized as multipart/form-data
        if (containsBinaryData) {
            this.logger.debug('Request arguments contain binary data');
            const form = new FormData();
            for (const [key, value] of flattened) {
                if (key === undefined || value === undefined)
                    continue;
                if (Buffer.isBuffer(value)) {
                    const streamOrBuffer = value;
                    let filename = defaultFilename;
                    if (typeof streamOrBuffer.name === 'string') {
                        filename = (0, node_path_1.basename)(streamOrBuffer.name);
                    }
                    else if (typeof streamOrBuffer.path === 'string') {
                        filename = (0, node_path_1.basename)(streamOrBuffer.path);
                    }
                    form.append(key, new Blob([new Uint8Array(value)]), filename);
                }
                else {
                    form.append(key, String(value));
                }
            }
            // Do not set Content-Type — fetch auto-generates the multipart boundary
            return { serializedBody: form, contentHeaders: {} };
        }
        // Otherwise, serialize as url-encoded key-value pairs
        // biome-ignore lint/suspicious/noExplicitAny: form values can be anything
        const initialValue = {};
        const encoded = (0, node_querystring_1.stringify)(flattened.reduce((accumulator, [key, value]) => {
            if (key !== undefined && value !== undefined) {
                accumulator[key] = value;
            }
            return accumulator;
        }, initialValue));
        return {
            serializedBody: encoded,
            contentHeaders: { 'Content-Type': 'application/x-www-form-urlencoded' },
        };
    }
    /**
     * Processes an HTTP response into a WebAPICallResult by performing JSON parsing on the body and merging relevant
     * HTTP headers into the object.
     * @param response - an http response
     */
    async buildResult(response) {
        const contentType = response.headers.get('content-type');
        const isGzipResponse = contentType === 'application/gzip';
        // biome-ignore lint/suspicious/noExplicitAny: HTTP response data can be anything
        let data;
        // admin.analytics.getFile returns a gzip binary response that can be unzipped
        if (isGzipResponse) {
            try {
                const buffer = Buffer.from(await response.arrayBuffer());
                const unzippedData = await new Promise((resolve, reject) => {
                    node_zlib_1.default.unzip(buffer, (err, buf) => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve(buf.toString().split('\n'));
                    });
                });
                const fileData = [];
                if (Array.isArray(unzippedData)) {
                    for (const dataset of unzippedData) {
                        if (dataset && dataset.length > 0) {
                            fileData.push(JSON.parse(dataset));
                        }
                    }
                }
                data = { file_data: fileData };
            }
            catch (err) {
                data = { ok: false, error: err };
            }
        }
        else if (!isGzipResponse && response.url.endsWith('/admin.analytics.getFile')) {
            // if it isn't a Gzip response but is from the admin.analytics.getFile request,
            // decode the ArrayBuffer to JSON read the error
            const buffer = await response.arrayBuffer();
            data = JSON.parse(new node_util_1.TextDecoder().decode(buffer));
        }
        else {
            const text = await response.text();
            try {
                data = JSON.parse(text);
            }
            catch (_) {
                // failed to parse the response body as JSON
                data = { ok: false, error: text };
            }
        }
        if (data.response_metadata === undefined) {
            data.response_metadata = {};
        }
        // add scopes metadata from headers
        const oauthScopes = response.headers.get('x-oauth-scopes');
        if (oauthScopes !== null) {
            data.response_metadata.scopes = oauthScopes.trim().split(/\s*,\s*/);
        }
        const acceptedOauthScopes = response.headers.get('x-accepted-oauth-scopes');
        if (acceptedOauthScopes !== null) {
            data.response_metadata.acceptedScopes = acceptedOauthScopes.trim().split(/\s*,\s*/);
        }
        // add retry metadata from headers
        const retrySec = parseRetryHeaders(response);
        if (retrySec !== undefined) {
            data.response_metadata.retryAfter = retrySec;
        }
        return data;
    }
}
exports.WebClient = WebClient;
exports["default"] = WebClient;
/**
 * Determines an appropriate set of cursor pagination options for the next request to a paginated API method.
 * @param previousResult - the result of the last request, where the next cursor might be found.
 * @param pageSize - the maximum number of additional items to fetch in the next request.
 */
function paginationOptionsForNextPage(previousResult, pageSize) {
    if (previousResult !== undefined &&
        previousResult.response_metadata !== undefined &&
        previousResult.response_metadata.next_cursor !== undefined &&
        previousResult.response_metadata.next_cursor !== '') {
        return {
            limit: pageSize,
            cursor: previousResult.response_metadata.next_cursor,
        };
    }
    return undefined;
}
/**
 * Extract the amount of time (in seconds) the platform has recommended this client wait before sending another request
 * from a rate-limited HTTP response (statusCode = 429).
 */
function parseRetryHeaders(response) {
    const retryAfterHeader = response.headers.get('retry-after');
    if (retryAfterHeader !== null) {
        const retryAfter = Number.parseInt(retryAfterHeader, 10);
        if (!Number.isNaN(retryAfter)) {
            return retryAfter;
        }
    }
    return undefined;
}
/**
 * Log a warning when using a deprecated method
 * @param method api method being called
 * @param logger instance of web clients logger
 */
function warnDeprecations(method, logger) {
    const deprecatedMethods = ['oauth.access'];
    const isDeprecated = deprecatedMethods.some((depMethod) => {
        const re = new RegExp(`^${depMethod}`);
        return re.test(method);
    });
    if (isDeprecated) {
        logger.warn(`${method} is deprecated. Please check on https://docs.slack.dev/reference/methods for an alternative.`);
    }
}
/**
 * Log a warning when using chat.postMessage without text argument or attachments with fallback argument
 * @param method api method being called
 * @param logger instance of we clients logger
 * @param options arguments for the Web API method
 */
function warnIfFallbackIsMissing(method, logger, options) {
    const targetMethods = ['chat.postEphemeral', 'chat.postMessage', 'chat.scheduleMessage'];
    const isTargetMethod = targetMethods.includes(method);
    const hasAttachments = (args) => Array.isArray(args.attachments) && args.attachments.length;
    const missingAttachmentFallbackDetected = (args) => Array.isArray(args.attachments) &&
        args.attachments.some((attachment) => !attachment.fallback || attachment.fallback.trim() === '');
    const isEmptyText = (args) => (args.text === undefined || args.text === null || args.text === '') &&
        (args.markdown_text === undefined || args.markdown === null || args.markdown_text === '');
    const buildMissingTextWarning = () => `The top-level \`text\` argument is missing in the request payload for a ${method} call - It's a best practice to always provide a \`text\` argument when posting a message. The \`text\` is used in places where the content cannot be rendered such as: system push notifications, assistive technology such as screen readers, etc.`;
    const buildMissingFallbackWarning = () => `Additionally, the attachment-level \`fallback\` argument is missing in the request payload for a ${method} call - To avoid this warning, it is recommended to always provide a top-level \`text\` argument when posting a message. Alternatively, you can provide an attachment-level \`fallback\` argument, though this is now considered a legacy field (see https://docs.slack.dev/legacy/legacy-messaging/legacy-secondary-message-attachments for more details).`;
    if (isTargetMethod && typeof options === 'object') {
        if (hasAttachments(options)) {
            if (missingAttachmentFallbackDetected(options) && isEmptyText(options)) {
                logger.warn(buildMissingTextWarning());
                logger.warn(buildMissingFallbackWarning());
            }
        }
        else if (isEmptyText(options)) {
            logger.warn(buildMissingTextWarning());
        }
    }
}
/**
 * Log a warning when thread_ts is not a string
 * @param method api method being called
 * @param logger instance of web clients logger
 * @param options arguments for the Web API method
 */
function warnIfThreadTsIsNotString(method, logger, options) {
    const targetMethods = ['chat.postEphemeral', 'chat.postMessage', 'chat.scheduleMessage'];
    const isTargetMethod = targetMethods.includes(method);
    if (isTargetMethod && options?.thread_ts !== undefined && typeof options?.thread_ts !== 'string') {
        logger.warn(buildThreadTsWarningMessage(method));
    }
}
function buildThreadTsWarningMessage(method) {
    return `The given thread_ts value in the request payload for a ${method} call is a float value. We highly recommend using a string value instead.`;
}
/**
 * Takes an object and redacts specific items
 * @param body
 * @returns
 */
function redact(body) {
    // biome-ignore lint/suspicious/noExplicitAny: objects can be anything
    const flattened = Object.entries(body).map(([key, value]) => {
        // no value provided
        if (value === undefined || value === null) {
            return [];
        }
        let serializedValue = value;
        // redact possible tokens
        if (key.match(/.*token.*/) !== null || key.match(/[Aa]uthorization/)) {
            serializedValue = '[[REDACTED]]';
        }
        // when value is buffer we can avoid logging it
        if (Buffer.isBuffer(value)) {
            serializedValue = '[[BINARY VALUE OMITTED]]';
        }
        else if (typeof value === 'object') {
            serializedValue = redact(value);
        }
        return [key, serializedValue];
    });
    // return as object
    const initialValue = {};
    return flattened.reduce((accumulator, [key, value]) => {
        if (key !== undefined && value !== undefined) {
            accumulator[key] = value;
        }
        return accumulator;
    }, initialValue);
}
//# sourceMappingURL=WebClient.js.map

/***/ }),

/***/ 7760:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatStreamer = void 0;
class ChatStreamer {
    buffer = '';
    client;
    logger;
    options;
    state;
    streamArgs;
    streamTs;
    token;
    /**
     * Instantiate a new chat streamer.
     *
     * @description The "constructor" method creates a unique {@link ChatStreamer} instance that keeps track of one chat stream.
     * @example
     * const client = new WebClient(process.env.SLACK_BOT_TOKEN);
     * const logger = new ConsoleLogger();
     * const args = {
     *   channel: "C0123456789",
     *   thread_ts: "1700000001.123456",
     *   recipient_team_id: "T0123456789",
     *   recipient_user_id: "U0123456789",
     * };
     * const streamer = new ChatStreamer(client, logger, args, { buffer_size: 512 });
     * await streamer.append({
     *   markdown_text: "**hello world!**",
     * });
     * await streamer.stop();
     * @see {@link https://docs.slack.dev/reference/methods/chat.startStream}
     * @see {@link https://docs.slack.dev/reference/methods/chat.appendStream}
     * @see {@link https://docs.slack.dev/reference/methods/chat.stopStream}
     */
    constructor(client, logger, args, options) {
        this.client = client;
        this.logger = logger;
        this.options = {
            buffer_size: options.buffer_size ?? 256,
        };
        this.state = 'starting';
        this.streamArgs = args;
    }
    /**
     * @description The message timestamp of the stream. Returns `undefined` until the first flush
     * (when `chat.startStream` is called).
     * @see {@link https://docs.slack.dev/reference/methods/chat.update}
     */
    get ts() {
        return this.streamTs;
    }
    /**
     * Append to the stream.
     *
     * @description The "append" method appends to the chat stream being used. This method can be called multiple times. After the stream is stopped this method cannot be called.
     * @example
     * const streamer = client.chatStream({
     *   channel: "C0123456789",
     *   thread_ts: "1700000001.123456",
     *   recipient_team_id: "T0123456789",
     *   recipient_user_id: "U0123456789",
     * });
     * await streamer.append({
     *   markdown_text: "**hello wo",
     * });
     * await streamer.append({
     *   markdown_text: "rld!**",
     * });
     * await streamer.stop();
     * @see {@link https://docs.slack.dev/reference/methods/chat.appendStream}
     */
    async append(args) {
        if (this.state === 'completed') {
            throw new Error(`failed to append stream: stream state is ${this.state}`);
        }
        const { markdown_text, chunks, ...opts } = args;
        if (opts.token) {
            this.token = opts.token;
        }
        if (markdown_text) {
            this.buffer += markdown_text;
        }
        if (this.buffer.length >= this.options.buffer_size || chunks) {
            return await this.flushBuffer({ chunks, ...opts });
        }
        const details = {
            bufferLength: this.buffer.length,
            bufferSize: this.options.buffer_size,
            channel: this.streamArgs.channel,
            recipientTeamId: this.streamArgs.recipient_team_id,
            recipientUserId: this.streamArgs.recipient_user_id,
            threadTs: this.streamArgs.thread_ts,
        };
        this.logger.debug(`ChatStreamer appended to buffer: ${JSON.stringify(details)}`);
        return null;
    }
    /**
     * Stop the stream and finalize the message.
     *
     * @description The "stop" method stops the chat stream being used. This method can be called once to end the stream. Additional "blocks" and "metadata" can be provided.
     *
     * @example
     * const streamer = client.chatStream({
     *   channel: "C0123456789",
     *   thread_ts: "1700000001.123456",
     *   recipient_team_id: "T0123456789",
     *   recipient_user_id: "U0123456789",
     * });
     * await streamer.append({
     *   markdown_text: "**hello world!**",
     * });
     * await streamer.stop();
     * @see {@link https://docs.slack.dev/reference/methods/chat.stopStream}
     */
    async stop(args) {
        if (this.state === 'completed') {
            throw new Error(`failed to stop stream: stream state is ${this.state}`);
        }
        const { markdown_text, chunks, ...opts } = args ?? {};
        if (opts.token) {
            this.token = opts.token;
        }
        if (markdown_text) {
            this.buffer += markdown_text;
        }
        if (!this.streamTs) {
            const response = await this.client.chat.startStream({
                ...this.streamArgs,
                token: this.token,
            });
            if (!response.ts) {
                throw new Error('failed to stop stream: stream not started');
            }
            this.streamTs = response.ts;
            this.state = 'in_progress';
        }
        const chunksToFlush = [];
        if (this.buffer.length > 0) {
            chunksToFlush.push({
                type: 'markdown_text',
                text: this.buffer,
            });
        }
        if (chunks) {
            chunksToFlush.push(...chunks);
        }
        const response = await this.client.chat.stopStream({
            token: this.token,
            channel: this.streamArgs.channel,
            ts: this.streamTs,
            chunks: chunksToFlush,
            ...opts,
        });
        this.state = 'completed';
        return response;
    }
    async flushBuffer(args) {
        const { chunks, ...opts } = args ?? {};
        const chunksToFlush = [];
        if (this.buffer.length > 0) {
            chunksToFlush.push({
                type: 'markdown_text',
                text: this.buffer,
            });
        }
        if (chunks) {
            chunksToFlush.push(...chunks);
        }
        if (!this.streamTs) {
            const response = await this.client.chat.startStream({
                ...this.streamArgs,
                token: this.token,
                chunks: chunksToFlush,
                ...opts,
            });
            this.buffer = '';
            this.streamTs = response.ts;
            this.state = 'in_progress';
            return response;
        }
        const response = await this.client.chat.appendStream({
            token: this.token,
            channel: this.streamArgs.channel,
            ts: this.streamTs,
            chunks: chunksToFlush,
            ...opts,
        });
        this.buffer = '';
        return response;
    }
}
exports.ChatStreamer = ChatStreamer;
//# sourceMappingURL=chat-stream.js.map

/***/ }),

/***/ 8486:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebAPIFileUploadReadFileDataError = exports.WebAPIFileUploadInvalidArgumentsError = exports.WebAPIRateLimitedError = exports.WebAPIHTTPError = exports.WebAPIRequestError = exports.WebAPIPlatformError = exports.SlackError = exports.ErrorCode = void 0;
/**
 * A dictionary of codes for errors produced by this package
 */
var ErrorCode;
(function (ErrorCode) {
    // general error
    ErrorCode["RequestError"] = "slack_webapi_request_error";
    ErrorCode["HTTPError"] = "slack_webapi_http_error";
    ErrorCode["PlatformError"] = "slack_webapi_platform_error";
    ErrorCode["RateLimitedError"] = "slack_webapi_rate_limited_error";
    // file uploads errors
    ErrorCode["FileUploadInvalidArgumentsError"] = "slack_webapi_file_upload_invalid_args_error";
    ErrorCode["FileUploadReadFileDataError"] = "slack_webapi_file_upload_read_file_data_error";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
class SlackError extends Error {
    constructor(message, options) {
        super(message, options);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.SlackError = SlackError;
class WebAPIPlatformError extends SlackError {
    code = ErrorCode.PlatformError;
    data;
    constructor(result) {
        super(`An API error occurred: ${result.error}`);
        this.data = result;
    }
}
exports.WebAPIPlatformError = WebAPIPlatformError;
class WebAPIRequestError extends SlackError {
    code = ErrorCode.RequestError;
    original;
    constructor(original) {
        super(`A request error occurred: ${original.message}`, { cause: original });
        this.original = original;
    }
}
exports.WebAPIRequestError = WebAPIRequestError;
class WebAPIHTTPError extends SlackError {
    code = ErrorCode.HTTPError;
    statusCode;
    statusMessage;
    headers;
    // biome-ignore lint/suspicious/noExplicitAny: HTTP response bodies might be anything
    body;
    constructor(statusCode, statusMessage, headers, 
    // biome-ignore lint/suspicious/noExplicitAny: HTTP response bodies might be anything
    body) {
        super(`An HTTP protocol error occurred: statusCode = ${statusCode}`);
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.headers = headers;
        if (typeof body === 'string') {
            try {
                this.body = JSON.parse(body);
            }
            catch {
                this.body = body;
            }
        }
        else {
            this.body = body;
        }
    }
}
exports.WebAPIHTTPError = WebAPIHTTPError;
class WebAPIRateLimitedError extends SlackError {
    code = ErrorCode.RateLimitedError;
    retryAfter;
    constructor(retryAfter) {
        super(`A rate-limit has been reached, you may retry this request in ${retryAfter} seconds`);
        this.retryAfter = retryAfter;
    }
}
exports.WebAPIRateLimitedError = WebAPIRateLimitedError;
class WebAPIFileUploadInvalidArgumentsError extends SlackError {
    code = ErrorCode.FileUploadInvalidArgumentsError;
}
exports.WebAPIFileUploadInvalidArgumentsError = WebAPIFileUploadInvalidArgumentsError;
class WebAPIFileUploadReadFileDataError extends SlackError {
    code = ErrorCode.FileUploadReadFileDataError;
}
exports.WebAPIFileUploadReadFileDataError = WebAPIFileUploadReadFileDataError;
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ 2577:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFileUploadJob = getFileUploadJob;
exports.getMultipleFileUploadJobs = getMultipleFileUploadJobs;
exports.getFileData = getFileData;
exports.getFileDataLength = getFileDataLength;
exports.getFileDataAsStream = getFileDataAsStream;
exports.getAllFileUploadsToComplete = getAllFileUploadsToComplete;
exports.warnIfChannels = warnIfChannels;
exports.errorIfChannelsCsv = errorIfChannelsCsv;
exports.errorIfInvalidOrMissingFileData = errorIfInvalidOrMissingFileData;
exports.warnIfMissingOrInvalidFileNameAndDefault = warnIfMissingOrInvalidFileNameAndDefault;
exports.warnIfLegacyFileType = warnIfLegacyFileType;
exports.buildMissingFileIdError = buildMissingFileIdError;
exports.buildFileSizeErrorMsg = buildFileSizeErrorMsg;
exports.buildLegacyFileTypeWarning = buildLegacyFileTypeWarning;
exports.buildMissingFileNameWarning = buildMissingFileNameWarning;
exports.buildMissingExtensionWarning = buildMissingExtensionWarning;
exports.buildFilesUploadMissingMessage = buildFilesUploadMissingMessage;
exports.buildChannelsWarning = buildChannelsWarning;
exports.buildMultipleChannelsErrorMsg = buildMultipleChannelsErrorMsg;
exports.buildInvalidFilesUploadParamError = buildInvalidFilesUploadParamError;
const node_fs_1 = __nccwpck_require__(3024);
const node_stream_1 = __nccwpck_require__(7075);
const errors_1 = __nccwpck_require__(8486);
async function getFileUploadJob(options, logger) {
    // Validate parameters
    warnIfLegacyFileType(options, logger);
    warnIfChannels(options, logger);
    errorIfChannelsCsv(options);
    const fileName = warnIfMissingOrInvalidFileNameAndDefault(options, logger);
    const fileData = await getFileData(options);
    const fileDataBytesLength = getFileDataLength(fileData);
    const fileUploadJob = {
        // supplied by user
        alt_text: options.alt_text,
        blocks: options.blocks,
        channel_id: options.channels ?? options.channel_id,
        filename: options.filename ?? fileName,
        highlight_type: options.highlight_type,
        initial_comment: options.initial_comment,
        snippet_type: options.snippet_type,
        title: options.title ?? options.filename ?? fileName, // default title to filename unless otherwise specified
        // calculated
        data: fileData,
        length: fileDataBytesLength,
    };
    if ('thread_ts' in options) {
        fileUploadJob.thread_ts = options.thread_ts;
    }
    if ('token' in options) {
        fileUploadJob.token = options.token;
    }
    if ('content' in options) {
        return {
            content: options.content,
            ...fileUploadJob,
        };
    }
    if ('file' in options) {
        return {
            file: options.file,
            ...fileUploadJob,
        };
    }
    throw new errors_1.WebAPIFileUploadInvalidArgumentsError('Either a file or content field is required for valid file upload. You must supply one');
}
/**
 * Returns an array of files upload entries when `file_uploads` is supplied.
 * **Note**
 * file_uploads should be set when multiple files are intended to be attached to a
 * single message. To support this, we handle options supplied with
 * top level `initial_comment`, `thread_ts`, `channel_id` and `file_uploads` parameters.
 * ```javascript
 * const res = await client.files.uploadV2({
 *   initial_comment: 'Here are the files!',
 *   thread_ts: '1223313423434.131321',
 *   channel_id: 'C12345',
 *   file_uploads: [
 *     {
 *       file: './test/fixtures/test-txt.txt',
 *       filename: 'test-txt.txt',
 *     },
 *     {
 *       file: './test/fixtures/test-png.png',
 *       filename: 'test-png.png',
 *     },
 *   ],
 * });
 * ```
 * @param options provided by user
 */
async function getMultipleFileUploadJobs(options, logger) {
    if ('file_uploads' in options) {
        // go through each file_upload and create a job for it
        return Promise.all(options.file_uploads.map((upload) => {
            // ensure no omitted properties included in files_upload entry
            // these properties are valid only at the top-level, not
            // inside file_uploads.
            const { blocks, channel_id, channels, initial_comment, thread_ts } = upload;
            if (blocks || channel_id || channels || initial_comment || thread_ts) {
                throw new errors_1.WebAPIFileUploadInvalidArgumentsError(buildInvalidFilesUploadParamError());
            }
            // takes any channel_id, initial_comment and thread_ts
            // supplied at the top level.
            const uploadJobArgs = {
                ...upload,
                blocks: options.blocks,
                channels: options.channels,
                channel_id: options.channel_id,
                initial_comment: options.initial_comment,
            };
            if ('thread_ts' in options) {
                uploadJobArgs.thread_ts = options.thread_ts;
            }
            if ('token' in options) {
                uploadJobArgs.token = options.token;
            }
            if ('content' in upload) {
                return getFileUploadJob({
                    content: upload.content,
                    ...uploadJobArgs,
                }, logger);
            }
            if ('file' in upload) {
                return getFileUploadJob({
                    file: upload.file,
                    ...uploadJobArgs,
                }, logger);
            }
            throw new errors_1.WebAPIFileUploadInvalidArgumentsError('Either a file or content field is required for valid file upload. You must supply one');
        }));
    }
    throw new Error(buildFilesUploadMissingMessage());
}
// Helpers to build the FileUploadJob
/**
 * Returns a single file upload's data
 * @param options
 * @returns Binary data representation of file
 */
async function getFileData(options) {
    errorIfInvalidOrMissingFileData(options);
    if ('file' in options) {
        const { file } = options;
        // try to handle as buffer
        if (Buffer.isBuffer(file))
            return file;
        // try to handle as filepath
        if (typeof file === 'string') {
            // try to read file as if the string was a file path
            try {
                const dataBuffer = (0, node_fs_1.readFileSync)(file);
                return dataBuffer;
            }
            catch (_err) {
                throw new errors_1.WebAPIFileUploadInvalidArgumentsError(`Unable to resolve file data for ${file}. Please supply a filepath string, or binary data Buffer or String directly.`);
            }
        }
        // try to handle as Readable
        const data = await getFileDataAsStream(file);
        if (data)
            return data;
    }
    if ('content' in options)
        return Buffer.from(options.content);
    // general catch-all error
    throw new errors_1.WebAPIFileUploadReadFileDataError('There was an issue getting the file data for the file or content supplied');
}
function getFileDataLength(data) {
    if (data) {
        return Buffer.byteLength(data, 'utf8');
    }
    throw new errors_1.WebAPIFileUploadReadFileDataError(buildFileSizeErrorMsg());
}
async function getFileDataAsStream(readable) {
    const chunks = [];
    return new Promise((resolve, reject) => {
        readable.on('readable', () => {
            let chunk = readable.read();
            while (chunk !== null) {
                chunks.push(chunk);
                chunk = readable.read();
            }
        });
        readable.on('end', () => {
            if (chunks.length > 0) {
                const content = Buffer.concat(chunks);
                resolve(content);
            }
            else {
                reject(Error('No data in supplied file'));
            }
        });
    });
}
/**
 * Filters through all fileUploads and groups them into jobs for completion
 * based on combination of channel_id, thread_ts, initial_comment, blocks.
 * {@link https://docs.slack.dev/reference/methods/files.completeUploadExternal files.completeUploadExternal} allows for multiple
 * files to be uploaded with a message (`initial_comment`), and as a threaded message (`thread_ts`)
 * In order to be grouped together, file uploads must have like properties.
 * @param fileUploads
 * @returns
 */
function getAllFileUploadsToComplete(fileUploads) {
    const toComplete = {};
    for (const upload of fileUploads) {
        const { blocks, channel_id, thread_ts, highlight_type, initial_comment, file_id, title } = upload;
        if (file_id) {
            const compareString = `:::${channel_id}:::${thread_ts}:::${initial_comment}:::${JSON.stringify(blocks)}`;
            // biome-ignore lint/suspicious/noPrototypeBuiltins: TODO use hasOwn instead of hasOwnProperty
            if (!Object.prototype.hasOwnProperty.call(toComplete, compareString)) {
                toComplete[compareString] = {
                    files: [{ id: file_id, title, highlight_type }],
                    channel_id,
                    blocks,
                    initial_comment,
                };
                if (thread_ts && channel_id) {
                    const fileThreadDestinationArgument = {
                        channel_id,
                        thread_ts,
                    };
                    toComplete[compareString] = {
                        ...toComplete[compareString],
                        ...fileThreadDestinationArgument,
                    };
                }
                if ('token' in upload) {
                    toComplete[compareString].token = upload.token;
                }
            }
            else {
                toComplete[compareString].files.push({
                    id: file_id,
                    title,
                    highlight_type,
                });
            }
        }
        else {
            throw new Error(buildMissingFileIdError());
        }
    }
    return toComplete;
}
// Validation
/**
 * `channels` param is supported but only when a single channel is specified.
 * @param options
 * @param logger
 */
function warnIfChannels(options, logger) {
    if (options.channels)
        logger.warn(buildChannelsWarning());
}
/**
 * v1 files.upload supported `channels` parameter provided as a comma-separated
 * string of values, e.g. 'C1234,C5678'. V2 no longer supports this csv value.
 * You may still supply `channels` with a single channel string value e.g. 'C1234'
 * but it is highly encouraged to supply `channel_id` instead.
 * @param options
 */
function errorIfChannelsCsv(options) {
    const channels = options.channels ? options.channels.split(',') : [];
    if (channels.length > 1) {
        throw new errors_1.WebAPIFileUploadInvalidArgumentsError(buildMultipleChannelsErrorMsg());
    }
}
/**
 * Checks for either a file or content property and errors if missing
 * @param options
 */
function errorIfInvalidOrMissingFileData(options) {
    const hasFile = 'file' in options;
    const hasContent = 'content' in options;
    if (!(hasFile || hasContent) || (hasFile && hasContent)) {
        throw new errors_1.WebAPIFileUploadInvalidArgumentsError('Either a file or content field is required for valid file upload. You cannot supply both');
    }
    if ('file' in options) {
        const { file } = options;
        if (file && !(typeof file === 'string' || Buffer.isBuffer(file) || file instanceof node_stream_1.Readable)) {
            throw new errors_1.WebAPIFileUploadInvalidArgumentsError('file must be a valid string path, buffer or Readable');
        }
    }
    if ('content' in options && options.content && typeof options.content !== 'string') {
        throw new errors_1.WebAPIFileUploadInvalidArgumentsError('content must be a string');
    }
}
/**
 * @param options
 * @param logger
 * @returns filename if it exists
 */
function warnIfMissingOrInvalidFileNameAndDefault(options, logger) {
    const DEFAULT_FILETYPE = 'txt';
    const DEFAULT_FILENAME = `file.${options.filetype ?? DEFAULT_FILETYPE}`;
    const { filename } = options;
    if (!filename) {
        // Filename was an optional property in legacy method
        logger.warn(buildMissingFileNameWarning());
        return DEFAULT_FILENAME;
    }
    if (filename.split('.').length < 2) {
        // likely filename is missing extension
        logger.warn(buildMissingExtensionWarning(filename));
    }
    return filename;
}
/**
 * `filetype` param is no longer supported and will be ignored
 * @param options
 * @param logger
 */
function warnIfLegacyFileType(options, logger) {
    if (options.filetype) {
        logger.warn(buildLegacyFileTypeWarning());
    }
}
// Validation message utilities
function buildMissingFileIdError() {
    return 'Missing required file id for file upload completion';
}
function buildFileSizeErrorMsg() {
    return 'There was an issue calculating the size of your file';
}
function buildLegacyFileTypeWarning() {
    return ('filetype is no longer a supported field in files.uploadV2.' +
        ' \nPlease remove this field. To indicate file type, please do so via the required filename property' +
        ' using the appropriate file extension, e.g. image.png, text.txt');
}
function buildMissingFileNameWarning() {
    return ('filename is a required field for files.uploadV2. \n For backwards compatibility and ease of migration, ' +
        'defaulting the filename. For best experience and consistent unfurl behavior, you' +
        ' should set the filename property with correct file extension, e.g. image.png, text.txt');
}
function buildMissingExtensionWarning(filename) {
    return `filename supplied '${filename}' may be missing a proper extension. Missing extenions may result in unexpected unfurl behavior when shared`;
}
function buildFilesUploadMissingMessage() {
    return 'Something went wrong with processing file_uploads';
}
function buildChannelsWarning() {
    return ("Although the 'channels' parameter is still supported for smoother migration from legacy files.upload, " +
        "we recommend using the new channel_id parameter with a single str value instead (e.g. 'C12345').");
}
function buildMultipleChannelsErrorMsg() {
    return 'Sharing files with multiple channels is no longer supported in v2. Share files in each channel separately instead.';
}
function buildInvalidFilesUploadParamError() {
    return ('You may supply file_uploads only for a single channel, message, or thread respectively. ' +
        'Therefore, please supply any channel_id, initial_comment or blocks, or thread_ts in the top-layer.');
}
//# sourceMappingURL=file-upload.js.map

/***/ }),

/***/ 4060:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = delay;
/**
 * Build a Promise that will resolve after the specified number of milliseconds.
 * @param ms milliseconds to wait
 * @param value value for eventual resolution
 */
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ 5105:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/// <reference lib="es2017" />
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebClientEvent = exports.WebClient = exports.ChatStreamer = exports.retryPolicies = exports.LogLevel = exports.addAppMetadata = exports.WebAPIRequestError = exports.WebAPIRateLimitedError = exports.WebAPIPlatformError = exports.WebAPIHTTPError = exports.WebAPIFileUploadReadFileDataError = exports.WebAPIFileUploadInvalidArgumentsError = exports.SlackError = exports.ErrorCode = void 0;
var errors_1 = __nccwpck_require__(8486);
Object.defineProperty(exports, "ErrorCode", ({ enumerable: true, get: function () { return errors_1.ErrorCode; } }));
Object.defineProperty(exports, "SlackError", ({ enumerable: true, get: function () { return errors_1.SlackError; } }));
Object.defineProperty(exports, "WebAPIFileUploadInvalidArgumentsError", ({ enumerable: true, get: function () { return errors_1.WebAPIFileUploadInvalidArgumentsError; } }));
Object.defineProperty(exports, "WebAPIFileUploadReadFileDataError", ({ enumerable: true, get: function () { return errors_1.WebAPIFileUploadReadFileDataError; } }));
Object.defineProperty(exports, "WebAPIHTTPError", ({ enumerable: true, get: function () { return errors_1.WebAPIHTTPError; } }));
Object.defineProperty(exports, "WebAPIPlatformError", ({ enumerable: true, get: function () { return errors_1.WebAPIPlatformError; } }));
Object.defineProperty(exports, "WebAPIRateLimitedError", ({ enumerable: true, get: function () { return errors_1.WebAPIRateLimitedError; } }));
Object.defineProperty(exports, "WebAPIRequestError", ({ enumerable: true, get: function () { return errors_1.WebAPIRequestError; } }));
var instrument_1 = __nccwpck_require__(9224);
Object.defineProperty(exports, "addAppMetadata", ({ enumerable: true, get: function () { return instrument_1.addAppMetadata; } }));
var logger_1 = __nccwpck_require__(4385);
Object.defineProperty(exports, "LogLevel", ({ enumerable: true, get: function () { return logger_1.LogLevel; } }));
var retry_policies_1 = __nccwpck_require__(1766);
Object.defineProperty(exports, "retryPolicies", ({ enumerable: true, get: function () { return __importDefault(retry_policies_1).default; } }));
__exportStar(__nccwpck_require__(381), exports);
__exportStar(__nccwpck_require__(5591), exports);
var chat_stream_1 = __nccwpck_require__(7760);
Object.defineProperty(exports, "ChatStreamer", ({ enumerable: true, get: function () { return chat_stream_1.ChatStreamer; } }));
var WebClient_1 = __nccwpck_require__(4048);
Object.defineProperty(exports, "WebClient", ({ enumerable: true, get: function () { return WebClient_1.WebClient; } }));
Object.defineProperty(exports, "WebClientEvent", ({ enumerable: true, get: function () { return WebClient_1.WebClientEvent; } }));
// methods must be exported after WebClient
__exportStar(__nccwpck_require__(9339), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9224:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addAppMetadata = addAppMetadata;
exports.getUserAgent = getUserAgent;
const os = __importStar(__nccwpck_require__(8161));
const node_path_1 = __nccwpck_require__(6760);
const packageJson = __nccwpck_require__(6734);
/**
 * Replaces occurrences of '/' with ':' in a string, since '/' is meaningful inside User-Agent strings as a separator.
 */
function replaceSlashes(s) {
    return s.replace('/', ':');
}
const MAX_LATIN1_CODE = 0xff;
/**
 * Ensures a string is safe for use in HTTP headers by URI-encoding characters outside the Latin-1 (ISO-8859-1) range.
 * Latin-1 characters (code points 0x00–0xFF) are preserved as-is; all others are percent-encoded via encodeURIComponent.
 */
function toLatin1Safe(s) {
    let result = '';
    for (const char of s) {
        result += char.charCodeAt(0) <= MAX_LATIN1_CODE ? char : encodeURIComponent(char);
    }
    return result;
}
// TODO: for the deno build (see the `npm run build:deno` npm run script), we could replace the `os-browserify` npm
// module shim with our own shim leveraging the deno beta compatibility layer for node's `os` module (for more info
// see https://deno.land/std@0.116.0/node/os.ts). At the time of writing this TODO (2021/11/25), this required deno
// v1.16.2 and use of the --unstable flag. Once support for this exists without the --unstable flag, we can improve
// the `os` module deno shim to correctly report operating system from a deno runtime. Until then, the below `os`-
// based code will report "browser/undefined" from a deno runtime.
const baseUserAgent = `${replaceSlashes(packageJson.name)}/${packageJson.version} ` +
    `${toLatin1Safe((0, node_path_1.basename)(process.title))}/${process.version.replace('v', '')} ` +
    `${os.platform()}/${os.release()}`;
const appMetadata = {};
/**
 * Appends the app metadata into the User-Agent value
 * @param appMetadata.name - name of tool to be counted in instrumentation
 * @param appMetadata.version - version of tool to be counted in instrumentation
 */
function addAppMetadata({ name, version }) {
    appMetadata[replaceSlashes(name)] = version;
}
/**
 * Returns the current User-Agent value for instrumentation
 */
function getUserAgent() {
    const appIdentifier = Object.entries(appMetadata)
        .map(([name, version]) => `${name}/${version}`)
        .join(' ');
    // only prepend the appIdentifier when it's not empty
    return (appIdentifier.length > 0 ? `${appIdentifier} ` : '') + baseUserAgent;
}
//# sourceMappingURL=instrument.js.map

/***/ }),

/***/ 4385:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogLevel = void 0;
exports.getLogger = getLogger;
const logger_1 = __nccwpck_require__(9234);
var logger_2 = __nccwpck_require__(9234);
Object.defineProperty(exports, "LogLevel", ({ enumerable: true, get: function () { return logger_2.LogLevel; } }));
let instanceCount = 0;
/**
 * INTERNAL interface for getting or creating a named Logger.
 */
function getLogger(name, level, existingLogger) {
    // Get a unique ID for the logger.
    const instanceId = instanceCount;
    instanceCount += 1;
    // Set up the logger.
    const logger = (() => {
        if (existingLogger !== undefined) {
            return existingLogger;
        }
        return new logger_1.ConsoleLogger();
    })();
    logger.setName(`web-api:${name}:${instanceId}`);
    if (level !== undefined) {
        logger.setLevel(level);
    }
    return logger;
}
//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 9339:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Methods = void 0;
const eventemitter3_1 = __nccwpck_require__(2415);
const WebClient_1 = __nccwpck_require__(4048);
/**
 * Binds a certain `method` and its (required) arguments and result types to the `apiCall` method in `WebClient`.
 */
function bindApiCall(self, method) {
    const apiMethod = self.apiCall.bind(self, method);
    return apiMethod;
}
/**
 * Binds a certain `method` and its (required) arguments and result types to the `apiCall` method in `WebClient`.
 */
function bindApiCallWithOptionalArgument(self, method) {
    const apiMethod = self.apiCall.bind(self, method);
    return apiMethod;
}
function bindFilesUploadV2(self) {
    return self.filesUploadV2.bind(self);
}
/**
 * A class that defines all Web API methods, their arguments type, their response type, and binds those methods to the
 * `apiCall` class method.
 */
class Methods extends eventemitter3_1.EventEmitter {
    constructor() {
        super();
        // Check that the class being created extends from `WebClient` rather than this class
        if (new.target !== WebClient_1.WebClient && !(new.target.prototype instanceof WebClient_1.WebClient)) {
            throw new Error('Attempt to inherit from WebClient methods without inheriting from WebClient');
        }
    }
    admin = {
        analytics: {
            /**
             * @description Retrieve analytics data for a given date, presented as a compressed JSON file.
             * @see {@link https://docs.slack.dev/reference/methods/api.test `api.test` API reference}.
             */
            getFile: bindApiCall(this, 'admin.analytics.getFile'),
        },
        apps: {
            activities: {
                /**
                 * @description Get logs for a specified team/org.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.apps.activities.list `admin.apps.activities.list` API reference}.
                 */
                list: bindApiCallWithOptionalArgument(this, 'admin.apps.activities.list'),
            },
            /**
             * @description Approve an app for installation on a workspace.
             * @see {@link https://docs.slack.dev/reference/methods/admin.apps.approve `admin.apps.approve` API reference}.
             */
            approve: bindApiCall(this, 'admin.apps.approve'),
            approved: {
                /**
                 * @description List approved apps for an org or workspace.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.apps.approved.list `admin.apps.approved.list` API reference}.
                 */
                list: bindApiCall(this, 'admin.apps.approved.list'),
            },
            /**
             * @description Clear an app resolution.
             * @see {@link https://docs.slack.dev/reference/methods/admin.apps.clearResolution `admin.apps.clearResolution` API reference}.
             */
            clearResolution: bindApiCall(this, 'admin.apps.clearResolution'),
            config: {
                /**
                 * @description Look up the app config for connectors by their IDs.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.apps.config.lookup `admin.apps.config.lookup` API reference}.
                 */
                lookup: bindApiCall(this, 'admin.apps.config.lookup'),
                /**
                 * @description Set the app config for a connector.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.apps.config.set `admin.apps.config.set` API reference}.
                 */
                set: bindApiCall(this, 'admin.apps.config.set'),
            },
            requests: {
                /**
                 * @description Cancel app request for team.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.apps.requests.cancel `admin.apps.requests.cancel` API reference}.
                 */
                cancel: bindApiCall(this, 'admin.apps.requests.cancel'),
                /**
                 * @description List app requests for a team/workspace.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.apps.requests.list `admin.apps.requests.list` API reference}.
                 */
                list: bindApiCall(this, 'admin.apps.requests.list'),
            },
            /**
             * @description Restrict an app for installation on a workspace.
             * @see {@link https://docs.slack.dev/reference/methods/admin.apps.restrict `admin.apps.restrict` API reference}.
             */
            restrict: bindApiCall(this, 'admin.apps.restrict'),
            restricted: {
                /**
                 * @description List restricted apps for an org or workspace.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.apps.restricted.list `admin.apps.restricted.list` API reference}.
                 */
                list: bindApiCall(this, 'admin.apps.restricted.list'),
            },
            /**
             * @description Uninstall an app from one or many workspaces, or an entire enterprise organization.
             * @see {@link https://docs.slack.dev/reference/methods/admin.apps.uninstall `admin.apps.uninstall` API reference}.
             */
            uninstall: bindApiCall(this, 'admin.apps.uninstall'),
        },
        auth: {
            policy: {
                /**
                 * @description Assign entities to a particular authentication policy.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.auth.policy.assignEntities `admin.auth.policy.assignEntities` API reference}.
                 */
                assignEntities: bindApiCall(this, 'admin.auth.policy.assignEntities'),
                /**
                 * @description Fetch all the entities assigned to a particular authentication policy by name.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.auth.policy.getEntities `admin.auth.policy.getEntities` API reference}.
                 */
                getEntities: bindApiCall(this, 'admin.auth.policy.getEntities'),
                /**
                 * @description Remove specified entities from a specified authentication policy.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.auth.policy.removeEntities `admin.auth.policy.removeEntities` API reference}.
                 */
                removeEntities: bindApiCall(this, 'admin.auth.policy.removeEntities'),
            },
        },
        barriers: {
            /**
             * @description Create an Information Barrier.
             * @see {@link https://docs.slack.dev/reference/methods/admin.barriers.create `admin.barriers.create` API reference}.
             */
            create: bindApiCall(this, 'admin.barriers.create'),
            /**
             * @description Delete an existing Information Barrier.
             * @see {@link https://docs.slack.dev/reference/methods/admin.barriers.delete `admin.barriers.delete` API reference}.
             */
            delete: bindApiCall(this, 'admin.barriers.delete'),
            /**
             * @description Get all Information Barriers for your organization.
             * @see {@link https://docs.slack.dev/reference/methods/admin.barriers.list `admin.barriers.list` API reference}.
             */
            list: bindApiCallWithOptionalArgument(this, 'admin.barriers.list'),
            /**
             * @description Update an existing Information Barrier.
             * @see {@link https://docs.slack.dev/reference/methods/admin.barriers.update `admin.barriers.update` API reference}.
             */
            update: bindApiCall(this, 'admin.barriers.update'),
        },
        conversations: {
            /**
             * @description Archive a public or private channel.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.archive `admin.conversations.archive` API reference}.
             */
            archive: bindApiCall(this, 'admin.conversations.archive'),
            /**
             * @description Archive public or private channels in bulk.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.bulkArchive `admin.conversations.bulkArchive` API reference}.
             */
            bulkArchive: bindApiCall(this, 'admin.conversations.bulkArchive'),
            /**
             * @description Delete public or private channels in bulk.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.bulkDelete `admin.conversations.bulkDelete` API reference}.
             */
            bulkDelete: bindApiCall(this, 'admin.conversations.bulkDelete'),
            /**
             * @description Move public or private channels in bulk.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.bulkMove `admin.conversations.bulkMove` API reference}.
             */
            bulkMove: bindApiCall(this, 'admin.conversations.bulkMove'),
            /**
             * @description Convert a public channel to a private channel.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.convertToPrivate `admin.conversations.convertToPrivate` API reference}.
             */
            convertToPrivate: bindApiCall(this, 'admin.conversations.convertToPrivate'),
            /**
             * @description Convert a private channel to a public channel.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.convertToPublic `admin.conversations.convertToPublic` API reference}.
             */
            convertToPublic: bindApiCall(this, 'admin.conversations.convertToPublic'),
            /**
             * @description Create a public or private channel-based conversation.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.create `admin.conversations.create` API reference}.
             */
            create: bindApiCall(this, 'admin.conversations.create'),
            /**
             * @description Delete a public or private channel.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.delete `admin.conversations.delete` API reference}.
             */
            delete: bindApiCall(this, 'admin.conversations.delete'),
            /**
             * @description Disconnect a connected channel from one or more workspaces.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.disconnectShared `admin.conversations.disconnectShared` API reference}.
             */
            disconnectShared: bindApiCall(this, 'admin.conversations.disconnectShared'),
            ekm: {
                /**
                 * @description List all disconnected channels — i.e., channels that were once connected to other workspaces
                 * and then disconnected — and the corresponding original channel IDs for key revocation with EKM.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.ekm.listOriginalConnectedChannelInfo `admin.conversations.ekm.listOriginalConnectedChannelInfo` API reference}.
                 */
                listOriginalConnectedChannelInfo: bindApiCallWithOptionalArgument(this, 'admin.conversations.ekm.listOriginalConnectedChannelInfo'),
            },
            /**
             * @description Get conversation preferences for a public or private channel.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.getConversationPrefs `admin.conversations.getConversationPrefs` API reference}.
             */
            getConversationPrefs: bindApiCall(this, 'admin.conversations.getConversationPrefs'),
            /**
             * @description Get a conversation's retention policy.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.getCustomRetention `admin.conversations.getCustomRetention` API reference}.
             */
            getCustomRetention: bindApiCall(this, 'admin.conversations.getCustomRetention'),
            /**
             * @description Get all the workspaces a given public or private channel is connected to within
             * this Enterprise org.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.getTeams `admin.conversations.getTeams` API reference}.
             */
            getTeams: bindApiCall(this, 'admin.conversations.getTeams'),
            /**
             * @description Invite a user to a public or private channel.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.invite `admin.conversations.invite` API reference}.
             */
            invite: bindApiCall(this, 'admin.conversations.invite'),
            /**
             * @description Returns channels on the given team using the filters.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.lookup `admin.conversations.lookup` API reference}.
             */
            lookup: bindApiCall(this, 'admin.conversations.lookup'),
            /**
             * @description Remove a conversation's retention policy.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.removeCustomRetention `admin.conversations.removeCustomRetention` API reference}.
             */
            removeCustomRetention: bindApiCall(this, 'admin.conversations.removeCustomRetention'),
            /**
             * @description Rename a public or private channel.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.rename `admin.conversations.rename` API reference}.
             */
            rename: bindApiCall(this, 'admin.conversations.rename'),
            restrictAccess: {
                /**
                 * @description Add an allowlist of IDP groups for accessing a channel.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.restrictAccess.addGroup `admin.conversations.restrictAccess.addGroup` API reference}.
                 */
                addGroup: bindApiCall(this, 'admin.conversations.restrictAccess.addGroup'),
                /**
                 * @description List all IDP Groups linked to a channel.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.restrictAccess.listGroups `admin.conversations.restrictAccess.listGroups` API reference}.
                 */
                listGroups: bindApiCall(this, 'admin.conversations.restrictAccess.listGroups'),
                /**
                 * @description Remove a linked IDP group linked from a private channel.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.restrictAccess.removeGroup `admin.conversations.restrictAccess.removeGroup` API reference}.
                 */
                removeGroup: bindApiCall(this, 'admin.conversations.restrictAccess.removeGroup'),
            },
            /**
             * @description Search for public or private channels in an Enterprise organization.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.search `admin.conversations.search` API reference}.
             */
            search: bindApiCallWithOptionalArgument(this, 'admin.conversations.search'),
            /**
             * @description Set the posting permissions for a public or private channel.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.setConversationPrefs `admin.conversations.setConversationPrefs` API reference}.
             */
            setConversationPrefs: bindApiCall(this, 'admin.conversations.setConversationPrefs'),
            /**
             * @description Set a conversation's retention policy.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.setCustomRetention `admin.conversations.setCustomRetention` API reference}.
             */
            setCustomRetention: bindApiCall(this, 'admin.conversations.setCustomRetention'),
            /**
             * @description Set the workspaces in an Enterprise grid org that connect to a public or private channel.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.setTeams `admin.conversations.setTeams` API reference}.
             */
            setTeams: bindApiCall(this, 'admin.conversations.setTeams'),
            /**
             * @description Unarchive a public or private channel.
             * @see {@link https://docs.slack.dev/reference/methods/admin.conversations.unarchive `admin.conversations.unarchive` API reference}.
             */
            unarchive: bindApiCall(this, 'admin.conversations.unarchive'),
        },
        emoji: {
            /**
             * @description Add an emoji.
             * @see {@link https://docs.slack.dev/reference/methods/admin.emoji.add `admin.emoji.add` API reference}.
             */
            add: bindApiCall(this, 'admin.emoji.add'),
            /**
             * @description Add an emoji alias.
             * @see {@link https://docs.slack.dev/reference/methods/admin.emoji.addAlias `admin.emoji.addAlias` API reference}.
             */
            addAlias: bindApiCall(this, 'admin.emoji.addAlias'),
            /**
             * @description List emoji for an Enterprise Grid organization.
             * @see {@link https://docs.slack.dev/reference/methods/admin.emoji.list `admin.emoji.list` API reference}.
             */
            list: bindApiCallWithOptionalArgument(this, 'admin.emoji.list'),
            /**
             * @description Remove an emoji across an Enterprise Grid organization.
             * @see {@link https://docs.slack.dev/reference/methods/admin.emoji.remove `admin.emoji.remove` API reference}.
             */
            remove: bindApiCall(this, 'admin.emoji.remove'),
            /**
             * @description Rename an emoji.
             * @see {@link https://docs.slack.dev/reference/methods/admin.emoji.rename `admin.emoji.rename` API reference}.
             */
            rename: bindApiCall(this, 'admin.emoji.rename'),
        },
        functions: {
            /**
             * @description Look up functions by a set of apps.
             * @see {@link https://docs.slack.dev/reference/methods/admin.functions.list `admin.functions.list` API reference}.
             */
            list: bindApiCall(this, 'admin.functions.list'),
            permissions: {
                /**
                 * @description Lookup the visibility of multiple Slack functions and include the users if
                 * it is limited to particular named entities.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.functions.permissions.lookup `admin.functions.permissions.lookup` API reference}.
                 */
                lookup: bindApiCall(this, 'admin.functions.permissions.lookup'),
                /**
                 * @description Set the visibility of a Slack function and define the users or workspaces if
                 * it is set to named_entities.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.functions.permissions.set `admin.functions.permissions.set` API reference}.
                 */
                set: bindApiCall(this, 'admin.functions.permissions.set'),
            },
        },
        inviteRequests: {
            /**
             * @description Approve a workspace invite request.
             * @see {@link https://docs.slack.dev/reference/methods/admin.inviteRequests.approve `admin.inviteRequests.approve` API reference}.
             */
            approve: bindApiCall(this, 'admin.inviteRequests.approve'),
            approved: {
                /**
                 * @description List all approved workspace invite requests.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.inviteRequests.approved.list `admin.inviteRequests.approved.list` API reference}.
                 */
                list: bindApiCall(this, 'admin.inviteRequests.approved.list'),
            },
            denied: {
                /**
                 * @description List all denied workspace invite requests.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.inviteRequests.denied.list `admin.inviteRequests.denied.list` API reference}.
                 */
                list: bindApiCall(this, 'admin.inviteRequests.denied.list'),
            },
            /**
             * @description Deny a workspace invite request.
             * @see {@link https://docs.slack.dev/reference/methods/admin.inviteRequests.deny `admin.inviteRequests.deny` API reference}.
             */
            deny: bindApiCall(this, 'admin.inviteRequests.deny'),
            /**
             * @description List all pending workspace invite requests.
             * @see {@link https://docs.slack.dev/reference/methods/admin.inviteRequests.list `admin.inviteRequests.list` API reference}.
             */
            list: bindApiCall(this, 'admin.inviteRequests.list'),
        },
        roles: {
            /**
             * @description Adds members to the specified role with the specified scopes.
             * @see {@link https://docs.slack.dev/reference/methods/admin.roles.addAssignments `admin.roles.addAssignments` API reference}.
             */
            addAssignments: bindApiCall(this, 'admin.roles.addAssignments'),
            /**
             * @description Lists assignments for all roles across entities.
             * Options to scope results by any combination of roles or entities.
             * @see {@link https://docs.slack.dev/reference/methods/admin.roles.listAssignments `admin.roles.listAssignments` API reference}.
             */
            listAssignments: bindApiCallWithOptionalArgument(this, 'admin.roles.listAssignments'),
            /**
             * @description Removes a set of users from a role for the given scopes and entities.
             * @see {@link https://docs.slack.dev/reference/methods/admin.roles.removeAssignments `admin.roles.removeAssignments` API reference}.
             */
            removeAssignments: bindApiCall(this, 'admin.roles.removeAssignments'),
        },
        teams: {
            admins: {
                /**
                 * @description List all of the admins on a given workspace.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.teams.admins.list `admin.teams.admins.list` API reference}.
                 */
                list: bindApiCall(this, 'admin.teams.admins.list'),
            },
            /**
             * @description Create an Enterprise team.
             * @see {@link https://docs.slack.dev/reference/methods/admin.teams.create `admin.teams.create` API reference}.
             */
            create: bindApiCall(this, 'admin.teams.create'),
            /**
             * @description List all teams on an Enterprise organization.
             * @see {@link https://docs.slack.dev/reference/methods/admin.teams.list `admin.teams.list` API reference}.
             */
            list: bindApiCallWithOptionalArgument(this, 'admin.teams.list'),
            owners: {
                /**
                 * @description List all of the owners on a given workspace.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.teams.owners.list `admin.teams.owners.list` API reference}.
                 */
                list: bindApiCall(this, 'admin.teams.owners.list'),
            },
            settings: {
                /**
                 * @description Fetch information about settings in a workspace.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.teams.settings.info `admin.teams.settings.info` API reference}.
                 */
                info: bindApiCall(this, 'admin.teams.settings.info'),
                /**
                 * @description Set the default channels of a workspace.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.teams.settings.setDefaultChannels `admin.teams.settings.setDefaultChannels` API reference}.
                 */
                setDefaultChannels: bindApiCall(this, 'admin.teams.settings.setDefaultChannels'),
                /**
                 * @description Set the description of a given workspace.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.teams.settings.setDescription `admin.teams.settings.setDescription` API reference}.
                 */
                setDescription: bindApiCall(this, 'admin.teams.settings.setDescription'),
                /**
                 * @description Set the discoverability of a given workspace.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.teams.settings.setDiscoverability `admin.teams.settings.setDiscoverability` API reference}.
                 */
                setDiscoverability: bindApiCall(this, 'admin.teams.settings.setDiscoverability'),
                /**
                 * @description Sets the icon of a workspace.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.teams.settings.setIcon `admin.teams.settings.setIcon` API reference}.
                 */
                setIcon: bindApiCall(this, 'admin.teams.settings.setIcon'),
                /**
                 * @description Set the name of a given workspace.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.teams.settings.setName `admin.teams.settings.setName` API reference}.
                 */
                setName: bindApiCall(this, 'admin.teams.settings.setName'),
            },
        },
        usergroups: {
            /**
             * @description Add up to one hundred default channels to an IDP group.
             * @see {@link https://docs.slack.dev/reference/methods/admin.usergroups.addChannels `admin.teams.usergroups.addChannels` API reference}.
             */
            addChannels: bindApiCall(this, 'admin.usergroups.addChannels'),
            /**
             * @description Associate one or more default workspaces with an organization-wide IDP group.
             * @see {@link https://docs.slack.dev/reference/methods/admin.usergroups.addTeams `admin.teams.usergroups.addTeams` API reference}.
             */
            addTeams: bindApiCall(this, 'admin.usergroups.addTeams'),
            /**
             * @description List the channels linked to an org-level IDP group (user group).
             * @see {@link https://docs.slack.dev/reference/methods/admin.usergroups.listChannels `admin.teams.usergroups.listChannels` API reference}.
             */
            listChannels: bindApiCall(this, 'admin.usergroups.listChannels'),
            /**
             * @description Remove one or more default channels from an org-level IDP group (user group).
             * @see {@link https://docs.slack.dev/reference/methods/admin.usergroups.removeChannels `admin.teams.usergroups.removeChannels` API reference}.
             */
            removeChannels: bindApiCall(this, 'admin.usergroups.removeChannels'),
        },
        users: {
            /**
             * @description Add an Enterprise user to a workspace.
             * @see {@link https://docs.slack.dev/reference/methods/admin.users.assign `admin.users.assign` API reference}.
             */
            assign: bindApiCall(this, 'admin.users.assign'),
            /**
             * @description Fetches the expiration timestamp for a guest.
             * @see {@link https://docs.slack.dev/reference/methods/admin.users.getExpiration `admin.users.getExpiration` API reference}.
             */
            getExpiration: bindApiCall(this, 'admin.users.getExpiration'),
            /**
             * @description Invite a user to a workspace.
             * @see {@link https://docs.slack.dev/reference/methods/admin.users.invite `admin.users.invite` API reference}.
             */
            invite: bindApiCall(this, 'admin.users.invite'),
            /**
             * @description List users on a workspace.
             * @see {@link https://docs.slack.dev/reference/methods/admin.users.list `admin.users.list` API reference}.
             */
            list: bindApiCallWithOptionalArgument(this, 'admin.users.list'),
            /**
             * @description Remove a user from a workspace.
             * @see {@link https://docs.slack.dev/reference/methods/admin.users.remove `admin.users.remove` API reference}.
             */
            remove: bindApiCall(this, 'admin.users.remove'),
            session: {
                /**
                 * @description Clear user-specific session settings—the session duration and what happens when the client
                 * closes—for a list of users.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.users.session.clearSettings `admin.users.session.clearSettings` API reference}.
                 */
                clearSettings: bindApiCall(this, 'admin.users.session.clearSettings'),
                /**
                 * @description Get user-specific session settings—the session duration and what happens when the client
                 * closes—given a list of users.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.users.session.getSettings `admin.users.session.getSettings` API reference}.
                 */
                getSettings: bindApiCall(this, 'admin.users.session.getSettings'),
                /**
                 * @description Revoke a single session for a user. The user will be forced to login to Slack.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.users.session.invalidate `admin.users.session.invalidate` API reference}.
                 */
                invalidate: bindApiCall(this, 'admin.users.session.invalidate'),
                /**
                 * @description List active user sessions for an organization.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.users.session.list `admin.users.session.list` API reference}.
                 */
                list: bindApiCallWithOptionalArgument(this, 'admin.users.session.list'),
                /**
                 * @description Wipes all valid sessions on all devices for a given user.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.users.session.reset `admin.users.session.reset` API reference}.
                 */
                reset: bindApiCall(this, 'admin.users.session.reset'),
                /**
                 * @description Enqueues an asynchronous job to wipe all valid sessions on all devices for a given user list.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.users.session.resetBulk `admin.users.session.resetBulk` API reference}.
                 */
                resetBulk: bindApiCall(this, 'admin.users.session.resetBulk'),
                /**
                 * @description Configure the user-level session settings—the session duration and what happens when the client
                 * closes—for one or more users.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.users.session.setSettings `admin.users.session.setSettings` API reference}.
                 */
                setSettings: bindApiCall(this, 'admin.users.session.setSettings'),
            },
            /**
             * @description Set an existing guest, regular user, or owner to be an admin user.
             * @see {@link https://docs.slack.dev/reference/methods/admin.users.setAdmin `admin.users.setAdmin` API reference}.
             */
            setAdmin: bindApiCall(this, 'admin.users.setAdmin'),
            /**
             * @description Set an expiration for a guest user.
             * @see {@link https://docs.slack.dev/reference/methods/admin.users.setExpiration `admin.users.setExpiration` API reference}.
             */
            setExpiration: bindApiCall(this, 'admin.users.setExpiration'),
            /**
             * @description Set an existing guest, regular user, or admin user to be a workspace owner.
             * @see {@link https://docs.slack.dev/reference/methods/admin.users.setOwner `admin.users.setOwner` API reference}.
             */
            setOwner: bindApiCall(this, 'admin.users.setOwner'),
            /**
             * @description Set an existing guest user, admin user, or owner to be a regular user.
             * @see {@link https://docs.slack.dev/reference/methods/admin.users.setRegular `admin.users.setRegular` API reference}.
             */
            setRegular: bindApiCall(this, 'admin.users.setRegular'),
            unsupportedVersions: {
                /**
                 * @description Ask Slackbot to send you an export listing all workspace members using unsupported software,
                 * presented as a zipped CSV file.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.users.unsupportedVersions.export `admin.users.unsupportedVersions.export` API reference}.
                 */
                export: bindApiCall(this, 'admin.users.unsupportedVersions.export'),
            },
        },
        workflows: {
            collaborators: {
                /**
                 * @description Add collaborators to workflows within the team or enterprise.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.workflows.collaborators.add `admin.workflows.collaborators.add` API reference}.
                 */
                add: bindApiCall(this, 'admin.workflows.collaborators.add'),
                /**
                 * @description Remove collaborators from workflows within the team or enterprise.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.workflows.collaborators.remove `admin.workflows.collaborators.remove` API reference}.
                 */
                remove: bindApiCall(this, 'admin.workflows.collaborators.remove'),
            },
            permissions: {
                /**
                 * @description Look up the permissions for a set of workflows.
                 * @see {@link https://docs.slack.dev/reference/methods/admin.workflows.permissions.lookup `admin.workflows.permissions.lookup` API reference}.
                 */
                lookup: bindApiCall(this, 'admin.workflows.permissions.lookup'),
            },
            /**
             * @description Search workflows within the team or enterprise.
             * @see {@link https://docs.slack.dev/reference/methods/admin.workflows.search `admin.workflows.search` API reference}.
             */
            search: bindApiCallWithOptionalArgument(this, 'admin.workflows.search'),
            /**
             * @description Unpublish workflows within the team or enterprise.
             * @see {@link https://docs.slack.dev/reference/methods/admin.workflows.unpublish `admin.workflows.unpublish` API reference}.
             */
            unpublish: bindApiCall(this, 'admin.workflows.unpublish'),
        },
    };
    agents = {
        conversations: {
            /**
             * @description Archive a code channel.
             * @see {@link https://docs.slack.dev/reference/methods/agents.conversations.archive `agents.conversations.archive` API reference}.
             */
            archive: bindApiCall(this, 'agents.conversations.archive'),
            /**
             * @description Create a dedicated code channel for an agent session.
             * @see {@link https://docs.slack.dev/reference/methods/agents.conversations.create `agents.conversations.create` API reference}.
             */
            create: bindApiCall(this, 'agents.conversations.create'),
            /**
             * @description Fetch a canvas attached to a code channel.
             * @see {@link https://docs.slack.dev/reference/methods/agents.conversations.getCanvas `agents.conversations.getCanvas` API reference}.
             */
            getCanvas: bindApiCall(this, 'agents.conversations.getCanvas'),
            /**
             * @description List the views currently attached to a code channel.
             * @see {@link https://docs.slack.dev/reference/methods/agents.conversations.listViews `agents.conversations.listViews` API reference}.
             */
            listViews: bindApiCall(this, 'agents.conversations.listViews'),
            /**
             * @description Remove a view from a code channel.
             * @see {@link https://docs.slack.dev/reference/methods/agents.conversations.removeView `agents.conversations.removeView` API reference}.
             */
            removeView: bindApiCall(this, 'agents.conversations.removeView'),
            /**
             * @description Replace the full markdown content of a plan canvas attached to a code channel.
             * @see {@link https://docs.slack.dev/reference/methods/agents.conversations.setCanvasContent `agents.conversations.setCanvasContent` API reference}.
             */
            setCanvasContent: bindApiCall(this, 'agents.conversations.setCanvasContent'),
            /**
             * @description Register the set of agent-defined slash commands for the calling agent in a code channel.
             * @see {@link https://docs.slack.dev/reference/methods/agents.conversations.setCommands `agents.conversations.setCommands` API reference}.
             */
            setCommands: bindApiCall(this, 'agents.conversations.setCommands'),
            /**
             * @description Set properties on a code channel.
             * @see {@link https://docs.slack.dev/reference/methods/agents.conversations.setProperties `agents.conversations.setProperties` API reference}.
             */
            setProperties: bindApiCall(this, 'agents.conversations.setProperties'),
            /**
             * @description Create or update a view in a code channel.
             * @see {@link https://docs.slack.dev/reference/methods/agents.conversations.setView `agents.conversations.setView` API reference}.
             */
            setView: bindApiCall(this, 'agents.conversations.setView'),
        },
        sessions: {
            /**
             * @description Rename an agent session.
             * @see {@link https://docs.slack.dev/reference/methods/agents.sessions.rename `agents.sessions.rename` API reference}.
             */
            rename: bindApiCall(this, 'agents.sessions.rename'),
            /**
             * @description Set an agent session's lifecycle status, creating the session if needed.
             * @see {@link https://docs.slack.dev/reference/methods/agents.sessions.setStatus `agents.sessions.setStatus` API reference}.
             */
            setStatus: bindApiCall(this, 'agents.sessions.setStatus'),
        },
    };
    api = {
        /**
         * @description Checks API calling code.
         * @see {@link https://docs.slack.dev/reference/methods/api.test `api.test` API reference}.
         */
        test: bindApiCallWithOptionalArgument(this, 'api.test'),
    };
    assistant = {
        threads: {
            /**
             * @description Set loading status to indicate that the app is building a response.
             * @see {@link https://docs.slack.dev/reference/methods/assistant.threads.setStatus `assistant.threads.setStatus` API reference}.
             */
            setStatus: bindApiCall(this, 'assistant.threads.setStatus'),
            /**
             * @description Set suggested prompts for the user. Can suggest up to four prompts.
             * @see {@link https://docs.slack.dev/reference/methods/assistant.threads.setSuggestedPrompts `assistant.threads.setSuggestedPrompts` API reference}.
             */
            setSuggestedPrompts: bindApiCall(this, 'assistant.threads.setSuggestedPrompts'),
            /**
             * @description Set the title of the thread. This is shown when a user views the app's chat history.
             * @see {@link https://docs.slack.dev/reference/methods/assistant.threads.setTitle `assistant.threads.setTitle` API reference}.
             */
            setTitle: bindApiCall(this, 'assistant.threads.setTitle'),
        },
    };
    apps = {
        connections: {
            /**
             * @description Generate a temporary Socket Mode WebSocket URL that your app can connect to in order to receive
             * events and interactive payloads over.
             * @see {@link https://docs.slack.dev/reference/methods/apps.connections.open `apps.connections.open` API reference}.
             */
            open: bindApiCallWithOptionalArgument(this, 'apps.connections.open'),
        },
        event: {
            authorizations: {
                /**
                 * @description Get a list of authorizations for the given event context.
                 * Each authorization represents an app installation that the event is visible to.
                 * @see {@link https://docs.slack.dev/reference/methods/apps.event.authorizations.list `apps.event.authorizations.list` API reference}.
                 */
                list: bindApiCall(this, 'apps.event.authorizations.list'),
            },
        },
        manifest: {
            /**
             * @description Create an app from an app manifest.
             * @see {@link https://docs.slack.dev/reference/methods/apps.manifest.create `apps.manifest.create` API reference}.
             */
            create: bindApiCall(this, 'apps.manifest.create'),
            /**
             * @description Permanently deletes an app created through app manifests.
             * @see {@link https://docs.slack.dev/reference/methods/apps.manifest.delete `apps.manifest.delete` API reference}.
             */
            delete: bindApiCall(this, 'apps.manifest.delete'),
            /**
             * @description Export an app manifest from an existing app.
             * @see {@link https://docs.slack.dev/reference/methods/apps.manifest.export `apps.manifest.export` API reference}.
             */
            export: bindApiCall(this, 'apps.manifest.export'),
            /**
             * @description Update an app from an app manifest.
             * @see {@link https://docs.slack.dev/reference/methods/apps.manifest.update `apps.manifest.update` API reference}.
             */
            update: bindApiCall(this, 'apps.manifest.update'),
            /**
             * @description Validate an app manifest.
             * @see {@link https://docs.slack.dev/reference/methods/apps.manifest.validate `apps.manifest.validate` API reference}.
             */
            validate: bindApiCall(this, 'apps.manifest.validate'),
        },
        /**
         * @description Uninstalls your app from a workspace.
         * @see {@link https://docs.slack.dev/reference/methods/apps.uninstall `apps.uninstall` API reference}.
         */
        uninstall: bindApiCall(this, 'apps.uninstall'),
        user: {
            connection: {
                /**
                 * @description Updates the connection status between a user and an app.
                 * @see {@link https://docs.slack.dev/reference/methods/apps.user.connection.update `apps.user.connection.update` API reference}.
                 */
                update: bindApiCall(this, 'apps.user.connection.update'),
            },
        },
    };
    auth = {
        /**
         * @description Revokes a token.
         * @see {@link https://docs.slack.dev/reference/methods/auth.revoke `auth.revoke` API reference}.
         */
        revoke: bindApiCallWithOptionalArgument(this, 'auth.revoke'),
        teams: {
            /**
             * @description Obtain a full list of workspaces your org-wide app has been approved for.
             * @see {@link https://docs.slack.dev/reference/methods/auth.teams.list `auth.teams.list` API reference}.
             */
            list: bindApiCallWithOptionalArgument(this, 'auth.teams.list'),
        },
        test: bindApiCallWithOptionalArgument(this, 'auth.test'),
    };
    bookmarks = {
        /**
         * @description Add bookmark to a channel.
         * @see {@link https://docs.slack.dev/reference/methods/bookmarks.add `bookmarks.add` API reference}.
         */
        add: bindApiCall(this, 'bookmarks.add'),
        /**
         * @description Edit bookmark.
         * @see {@link https://docs.slack.dev/reference/methods/bookmarks.edit `bookmarks.edit` API reference}.
         */
        edit: bindApiCall(this, 'bookmarks.edit'),
        /**
         * @description List bookmarks for a channel.
         * @see {@link https://docs.slack.dev/reference/methods/bookmarks.list `bookmarks.list` API reference}.
         */
        list: bindApiCall(this, 'bookmarks.list'),
        /**
         * @description Remove bookmark from a channel.
         * @see {@link https://docs.slack.dev/reference/methods/bookmarks.remove `bookmarks.remove` API reference}.
         */
        remove: bindApiCall(this, 'bookmarks.remove'),
    };
    blocks = {
        /**
         * @description Validates blocks, messages, and views Block Kit JSON payloads.
         * @see {@link https://docs.slack.dev/reference/methods/blocks.validate `blocks.validate` API reference}.
         */
        validate: bindApiCallWithOptionalArgument(this, 'blocks.validate'),
    };
    bots = {
        /**
         * @description Gets information about a bot user.
         * @see {@link https://docs.slack.dev/reference/methods/bots.info `bots.info` API reference}.
         */
        info: bindApiCallWithOptionalArgument(this, 'bots.info'),
    };
    calls = {
        /**
         * @description Registers a new Call.
         * @see {@link https://docs.slack.dev/reference/methods/calls.add `calls.add` API reference}.
         */
        add: bindApiCall(this, 'calls.add'),
        /**
         * @description Ends a Call.
         * @see {@link https://docs.slack.dev/reference/methods/calls.end `calls.end` API reference}.
         */
        end: bindApiCall(this, 'calls.end'),
        /**
         * @description Returns information about a Call.
         * @see {@link https://docs.slack.dev/reference/methods/calls.info `calls.info` API reference}.
         */
        info: bindApiCall(this, 'calls.info'),
        /**
         * @description Updates information about a Call.
         * @see {@link https://docs.slack.dev/reference/methods/calls.update `calls.update` API reference}.
         */
        update: bindApiCall(this, 'calls.update'),
        participants: {
            /**
             * @description Registers new participants added to a Call.
             * @see {@link https://docs.slack.dev/reference/methods/calls.participants.add `calls.participants.add` API reference}.
             */
            add: bindApiCall(this, 'calls.participants.add'),
            remove: bindApiCall(this, 'calls.participants.remove'),
        },
    };
    canvases = {
        access: {
            /**
             * @description Remove access to a canvas for specified entities.
             * @see {@link https://docs.slack.dev/reference/methods/canvases.access.delete `canvases.access.delete` API reference}.
             */
            delete: bindApiCall(this, 'canvases.access.delete'),
            /**
             * @description Sets the access level to a canvas for specified entities.
             * @see {@link https://docs.slack.dev/reference/methods/canvases.access.set `canvases.access.set` API reference}.
             */
            set: bindApiCall(this, 'canvases.access.set'),
        },
        /**
         * @description Create Canvas for a user.
         * @see {@link https://docs.slack.dev/reference/methods/canvases.create `canvases.create` API reference}.
         */
        create: bindApiCallWithOptionalArgument(this, 'canvases.create'),
        /**
         * @description Deletes a canvas.
         * @see {@link https://docs.slack.dev/reference/methods/canvases.delete `canvases.delete` API reference}.
         */
        delete: bindApiCall(this, 'canvases.delete'),
        /**
         * @description Update an existing canvas.
         * @see {@link https://docs.slack.dev/reference/methods/canvases.edit `canvases.edit` API reference}.
         */
        edit: bindApiCall(this, 'canvases.edit'),
        sections: {
            /**
             * @description Find sections matching the provided criteria.
             * @see {@link https://docs.slack.dev/reference/methods/canvases.sections.lookup `canvases.sections.lookup` API reference}.
             */
            lookup: bindApiCall(this, 'canvases.sections.lookup'),
        },
    };
    chat = {
        /**
         * @description Appends text to an existing streaming conversation.
         * @see {@link https://docs.slack.dev/reference/methods/chat.appendStream `chat.appendStream` API reference}.
         */
        appendStream: bindApiCall(this, 'chat.appendStream'),
        /**
         * @description Deletes a message.
         * @see {@link https://docs.slack.dev/reference/methods/chat.delete `chat.delete` API reference}.
         */
        delete: bindApiCall(this, 'chat.delete'),
        /**
         * @description Deletes a pending scheduled message from the queue.
         * @see {@link https://docs.slack.dev/reference/methods/chat.deleteScheduledMessage `chat.deleteScheduledMessage` API reference}.
         */
        deleteScheduledMessage: bindApiCall(this, 'chat.deleteScheduledMessage'),
        /**
         * @description Retrieve a permalink URL for a specific extant message.
         * @see {@link https://docs.slack.dev/reference/methods/chat.getPermalink `chat.getPermalink` API reference}.
         */
        getPermalink: bindApiCall(this, 'chat.getPermalink'),
        /**
         * @description Share a me message into a channel.
         * @see {@link https://docs.slack.dev/reference/methods/chat.meMessage `chat.meMessage` API reference}.
         */
        meMessage: bindApiCall(this, 'chat.meMessage'),
        /**
         * @description Sends an ephemeral message to a user in a channel.
         * @see {@link https://docs.slack.dev/reference/methods/chat.postEphemeral `chat.postEphemeral` API reference}.
         */
        postEphemeral: bindApiCall(this, 'chat.postEphemeral'),
        /**
         * @description Sends a message to a channel.
         * @see {@link https://docs.slack.dev/reference/methods/chat.postMessage `chat.postMessage` API reference}.
         */
        postMessage: bindApiCall(this, 'chat.postMessage'),
        /**
         * @description Schedules a message to be sent to a channel.
         * @see {@link https://docs.slack.dev/reference/methods/chat.scheduleMessage `chat.scheduleMessage` API reference}.
         */
        scheduleMessage: bindApiCall(this, 'chat.scheduleMessage'),
        scheduledMessages: {
            /**
             * @description Returns a list of scheduled messages.
             * @see {@link https://docs.slack.dev/reference/methods/chat.scheduledMessages.list `chat.scheduledMessages.list` API reference}.
             */
            list: bindApiCallWithOptionalArgument(this, 'chat.scheduledMessages.list'),
        },
        /**
         * @description Starts a new streaming conversation.
         * @see {@link https://docs.slack.dev/reference/methods/chat.startStream `chat.startStream` API reference}.
         */
        startStream: bindApiCall(this, 'chat.startStream'),
        /**
         * @description Stops a streaming conversation.
         * @see {@link https://docs.slack.dev/reference/methods/chat.stopStream `chat.stopStream` API reference}.
         */
        stopStream: bindApiCall(this, 'chat.stopStream'),
        /**
         * @description Provide custom unfurl behavior for user-posted URLs.
         * @see {@link https://docs.slack.dev/reference/methods/chat.unfurl `chat.unfurl` API reference}.
         */
        unfurl: bindApiCall(this, 'chat.unfurl'),
        /**
         * @description Updates a message.
         * @see {@link https://docs.slack.dev/reference/methods/chat.update `chat.update` API reference}.
         */
        update: bindApiCall(this, 'chat.update'),
    };
    conversations = {
        /**
         * @description Accepts an invitation to a Slack Connect channel.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.acceptSharedInvite `conversations.acceptSharedInvite` API reference}.
         */
        acceptSharedInvite: bindApiCall(this, 'conversations.acceptSharedInvite'),
        /**
         * @description Approves an invitation to a Slack Connect channel.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.approveSharedInvite `conversations.approveSharedInvite` API reference}.
         */
        approveSharedInvite: bindApiCall(this, 'conversations.approveSharedInvite'),
        /**
         * @description Archives a conversation.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.archive `conversations.archive` API reference}.
         */
        archive: bindApiCall(this, 'conversations.archive'),
        canvases: {
            /**
             * @description Create a Channel Canvas for a channel.
             * @see {@link https://docs.slack.dev/reference/methods/conversations.canvases.create `conversations.canvases.create` API reference}.
             */
            create: bindApiCall(this, 'conversations.canvases.create'),
        },
        /**
         * @description Closes a direct message or multi-person direct message.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.close `conversations.close` API reference}.
         */
        close: bindApiCall(this, 'conversations.close'),
        /**
         * @description Initiates a public or private channel-based conversation.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.create `conversations.create` API reference}.
         */
        create: bindApiCall(this, 'conversations.create'),
        /**
         * @description Declines an invitation to a Slack Connect channel.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.declineSharedInvite `conversations.declineSharedInvite` API reference}.
         */
        declineSharedInvite: bindApiCall(this, 'conversations.declineSharedInvite'),
        externalInvitePermissions: {
            /**
             * @description Convert a team in a shared channel from an External Limited channel to a fully shared Slack
             * Connect channel or vice versa.
             * @see {@link https://docs.slack.dev/reference/methods/conversations.externalInvitePermissions.set `conversations.externalInvitePermissions.set` API reference}.
             */
            set: bindApiCall(this, 'conversations.externalInvitePermissions.set'),
        },
        /**
         * @description Fetches a conversation's history of messages and events.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.history `conversations.history` API reference}.
         */
        history: bindApiCall(this, 'conversations.history'),
        /**
         * @description Retrieve information about a conversation.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.info `conversations.info` API reference}.
         */
        info: bindApiCall(this, 'conversations.info'),
        /**
         * @description Invites users to a channel.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.invite `conversations.invite` API reference}.
         */
        invite: bindApiCall(this, 'conversations.invite'),
        /**
         * @description Sends an invitation to a Slack Connect channel.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.inviteShared `conversations.inviteShared` API reference}.
         */
        inviteShared: bindApiCall(this, 'conversations.inviteShared'),
        /**
         * @description Joins an existing conversation.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.join `conversations.join` API reference}.
         */
        join: bindApiCall(this, 'conversations.join'),
        /**
         * @description Removes a user from a conversation.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.kick `conversations.kick` API reference}.
         */
        kick: bindApiCall(this, 'conversations.kick'),
        /**
         * @description Leaves a conversation.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.leave `conversations.leave` API reference}.
         */
        leave: bindApiCall(this, 'conversations.leave'),
        /**
         * @description List all channels in a Slack team.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.list `conversations.list` API reference}.
         */
        list: bindApiCallWithOptionalArgument(this, 'conversations.list'),
        /**
         * @description Lists shared channel invites that have been generated or received but have not been approved by
         * all parties.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.listConnectInvites `conversations.listConnectInvites` API reference}.
         */
        listConnectInvites: bindApiCallWithOptionalArgument(this, 'conversations.listConnectInvites'),
        /**
         * @description Sets the read cursor in a channel.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.mark `conversations.mark` API reference}.
         */
        mark: bindApiCall(this, 'conversations.mark'),
        /**
         * @description Retrieve members of a conversation.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.members `conversations.members` API reference}.
         */
        members: bindApiCall(this, 'conversations.members'),
        /**
         * @description Opens or resumes a direct message or multi-person direct message.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.open `conversations.open` API reference}.
         */
        open: bindApiCall(this, 'conversations.open'),
        /**
         * @description Renames a conversation.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.rename `conversations.rename` API reference}.
         */
        rename: bindApiCall(this, 'conversations.rename'),
        /**
         * @description Retrieve a thread of messages posted to a conversation.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.replies `conversations.replies` API reference}.
         */
        replies: bindApiCall(this, 'conversations.replies'),
        requestSharedInvite: {
            /**
             * @description Approves a request to add an external user to a channel and sends them a Slack Connect invite.
             * @see {@link https://docs.slack.dev/reference/methods/conversations.requestSharedInvite.approve `conversations.requestSharedInvite.approve` API reference}.
             */
            approve: bindApiCall(this, 'conversations.requestSharedInvite.approve'),
            /**
             * @description Denies a request to invite an external user to a channel.
             * @see {@link https://docs.slack.dev/reference/methods/conversations.requestSharedInvite.deny `conversations.requestSharedInvite.deny` API reference}.
             */
            deny: bindApiCall(this, 'conversations.requestSharedInvite.deny'),
            /**
             * @description Lists requests to add external users to channels with ability to filter.
             * @see {@link https://docs.slack.dev/reference/methods/conversations.requestSharedInvite.list `conversations.requestSharedInvite.list` API reference}.
             */
            list: bindApiCallWithOptionalArgument(this, 'conversations.requestSharedInvite.list'),
        },
        /**
         * @description Sets the purpose for a conversation.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.setPurpose `conversations.setPurpose` API reference}.
         */
        setPurpose: bindApiCall(this, 'conversations.setPurpose'),
        /**
         * @description Sets the topic for a conversation.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.setTopic `conversations.setTopic` API reference}.
         */
        setTopic: bindApiCall(this, 'conversations.setTopic'),
        /**
         * @description Reverses conversation archival.
         * @see {@link https://docs.slack.dev/reference/methods/conversations.unarchive `conversations.unarchive` API reference}.
         */
        unarchive: bindApiCall(this, 'conversations.unarchive'),
    };
    dialog = {
        /**
         * @description Open a dialog with a user.
         * @see {@link https://docs.slack.dev/reference/methods/dialog.open `dialog.open` API reference}.
         */
        open: bindApiCall(this, 'dialog.open'),
    };
    dnd = {
        /**
         * @description Ends the current user's Do Not Disturb session immediately.
         * @see {@link https://docs.slack.dev/reference/methods/dnd.endDnd `dnd.endDnd` API reference}.
         */
        endDnd: bindApiCallWithOptionalArgument(this, 'dnd.endDnd'),
        /**
         * @description Ends the current user's snooze mode immediately.
         * @see {@link https://docs.slack.dev/reference/methods/dnd.endSnooze `dnd.endSnooze` API reference}.
         */
        endSnooze: bindApiCallWithOptionalArgument(this, 'dnd.endSnooze'),
        /**
         * @description Retrieves a user's current Do Not Disturb status.
         * @see {@link https://docs.slack.dev/reference/methods/dnd.info `dnd.info` API reference}.
         */
        info: bindApiCallWithOptionalArgument(this, 'dnd.info'),
        /**
         * @description Turns on Do Not Disturb mode for the current user, or changes its duration.
         * @see {@link https://docs.slack.dev/reference/methods/dnd.setSnooze `dnd.setSnooze` API reference}.
         */
        setSnooze: bindApiCall(this, 'dnd.setSnooze'),
        /**
         * @description Retrieves the Do Not Disturb status for up to 50 users on a team.
         * @see {@link https://docs.slack.dev/reference/methods/dnd.teamInfo `dnd.teamInfo` API reference}.
         */
        teamInfo: bindApiCall(this, 'dnd.teamInfo'),
    };
    emoji = {
        /**
         * @description Lists custom emoji for a team.
         * @see {@link https://docs.slack.dev/reference/methods/emoji.list `emoji.list` API reference}.
         */
        list: bindApiCallWithOptionalArgument(this, 'emoji.list'),
    };
    entity = {
        /**
         * @description Provide information about the entity to be displayed in the flexpane.
         * @see {@link https://docs.slack.dev/reference/methods/entity.presentDetails}
         */
        presentDetails: bindApiCall(this, 'entity.presentDetails'),
    };
    files = {
        /**
         * @description Finishes an upload started with {@link https://docs.slack.dev/reference/methods/files.getUploadURLExternal `files.getUploadURLExternal`}.
         * @see {@link https://docs.slack.dev/reference/methods/files.completeUploadExternal `files.completeUploadExternal` API reference}.
         */
        completeUploadExternal: bindApiCall(this, 'files.completeUploadExternal'),
        /**
         * @description Deletes a file.
         * @see {@link https://docs.slack.dev/reference/methods/files.delete `files.delete` API reference}.
         */
        delete: bindApiCall(this, 'files.delete'),
        /**
         * @description Gets a URL for an edge external file upload.
         * @see {@link https://docs.slack.dev/reference/methods/files.getUploadURLExternal `files.getUploadURLExternal` API reference}.
         */
        getUploadURLExternal: bindApiCall(this, 'files.getUploadURLExternal'),
        /**
         * @description Gets information about a file.
         * @see {@link https://docs.slack.dev/reference/methods/files.info `files.info` API reference}.
         */
        info: bindApiCall(this, 'files.info'),
        /**
         * @description List files for a team, in a channel, or from a user with applied filters.
         * @see {@link https://docs.slack.dev/reference/methods/files.list `files.list` API reference}.
         */
        list: bindApiCall(this, 'files.list'),
        /**
         * @description Revokes public/external sharing access for a file.
         * @see {@link https://docs.slack.dev/reference/methods/files.revokePublicURL `files.revokePublicURL` API reference}.
         */
        revokePublicURL: bindApiCall(this, 'files.revokePublicURL'),
        /**
         * @description Enables a file for public/external sharing.
         * @see {@link https://docs.slack.dev/reference/methods/files.sharedPublicURL `files.sharedPublicURL` API reference}.
         */
        sharedPublicURL: bindApiCall(this, 'files.sharedPublicURL'),
        /**
         * @description Custom method to support a new way of uploading files to Slack.
         * Supports a single file upload
         * Supply:
         * - (required) single file or content
         * - (optional) channel, alt_text, snippet_type,
         * Supports multiple file uploads
         * Supply:
         * - multiple upload_files
         * Will try to honor both single file or content data supplied as well
         * as multiple file uploads property.
         * @see {@link https://docs.slack.dev/tools/node-slack-sdk/web-api/#upload-a-file `@slack/web-api` Upload a file documentation}.
         */
        uploadV2: bindFilesUploadV2(this),
        comments: {
            /**
             * @description Deletes an existing comment on a file.
             * @see {@link https://docs.slack.dev/reference/methods/files.comments.delete `files.comments.delete` API reference}.
             */
            delete: bindApiCall(this, 'files.comments.delete'),
        },
        remote: {
            /**
             * @description Adds a file from a remote service.
             * @see {@link https://docs.slack.dev/reference/methods/files.remote.add `files.remote.add` API reference}.
             */
            add: bindApiCall(this, 'files.remote.add'),
            /**
             * @description Retrieve information about a remote file added to Slack.
             * @see {@link https://docs.slack.dev/reference/methods/files.remote.info `files.remote.info` API reference}.
             */
            info: bindApiCall(this, 'files.remote.info'),
            /**
             * @description List remote files added to Slack.
             * @see {@link https://docs.slack.dev/reference/methods/files.remote.list `files.remote.list` API reference}.
             */
            list: bindApiCall(this, 'files.remote.list'),
            /**
             * @description Remove a remote file.
             * @see {@link https://docs.slack.dev/reference/methods/files.remote.remove `files.remote.remove` API reference}.
             */
            remove: bindApiCall(this, 'files.remote.remove'),
            /**
             * @description Share a remote file into a channel.
             * @see {@link https://docs.slack.dev/reference/methods/files.remote.share `files.remote.share` API reference}.
             */
            share: bindApiCall(this, 'files.remote.share'),
            /**
             * @description Updates an existing remote file.
             * @see {@link https://docs.slack.dev/reference/methods/files.remote.update `files.remote.update` API reference}.
             */
            update: bindApiCall(this, 'files.remote.update'),
        },
    };
    functions = {
        /**
         * @description Signal the failure to execute a Custom Function.
         * @see {@link https://docs.slack.dev/reference/methods/functions.completeError `functions.completeError` API reference}.
         */
        completeError: bindApiCall(this, 'functions.completeError'),
        /**
         * @description Signal the successful completion of a Custom Function.
         * @see {@link https://docs.slack.dev/reference/methods/functions.completeSuccess `functions.completeSuccess` API reference}.
         */
        completeSuccess: bindApiCall(this, 'functions.completeSuccess'),
    };
    migration = {
        /**
         * @description For Enterprise Grid workspaces, map local user IDs to global user IDs.
         * @see {@link https://docs.slack.dev/reference/methods/migration.exchange `migration.exchange` API reference}.
         */
        exchange: bindApiCall(this, 'migration.exchange'),
    };
    oauth = {
        /**
         * @description Exchanges a temporary OAuth verifier code for an access token.
         * @deprecated This is a legacy method only used by classic Slack apps. Use `oauth.v2.access` for new Slack apps.
         * @see {@link https://docs.slack.dev/reference/methods/oauth.access `oauth.access` API reference}.
         */
        access: bindApiCall(this, 'oauth.access'),
        v2: {
            /**
             * @description Exchanges a temporary OAuth verifier code for an access token.
             * @see {@link https://docs.slack.dev/reference/methods/oauth.v2.access `oauth.v2.access` API reference}.
             */
            access: bindApiCall(this, 'oauth.v2.access'),
            /**
             * @description Exchanges a legacy access token for a new expiring access token and refresh token.
             * @see {@link https://docs.slack.dev/reference/methods/oauth.v2.exchange `oauth.v2.exchange` API reference}.
             */
            exchange: bindApiCall(this, 'oauth.v2.exchange'),
        },
    };
    openid = {
        connect: {
            /**
             * @description Exchanges a temporary OAuth verifier code for an access token for {@link https://docs.slack.dev/authentication/sign-in-with-slack Sign in with Slack}.
             * @see {@link https://docs.slack.dev/reference/methods/openid.connect.token `openid.connect.token` API reference}.
             */
            token: bindApiCall(this, 'openid.connect.token'),
            /**
             * @description Get the identity of a user who has authorized {@link https://docs.slack.dev/authentication/sign-in-with-slack Sign in with Slack}.
             * @see {@link https://docs.slack.dev/reference/methods/openid.connect.userInfo `openid.connect.userInfo` API reference}.
             */
            userInfo: bindApiCallWithOptionalArgument(this, 'openid.connect.userInfo'),
        },
    };
    pins = {
        /**
         * @description Pins an item to a channel.
         * @see {@link https://docs.slack.dev/reference/methods/pins.add `pins.add` API reference}.
         */
        add: bindApiCall(this, 'pins.add'),
        /**
         * @description Lists items pinned to a channel.
         * @see {@link https://docs.slack.dev/reference/methods/pins.list `pins.list` API reference}.
         */
        list: bindApiCall(this, 'pins.list'),
        /**
         * @description Un-pins an item from a channel.
         * @see {@link https://docs.slack.dev/reference/methods/pins.remove `pins.remove` API reference}.
         */
        remove: bindApiCall(this, 'pins.remove'),
    };
    reactions = {
        /**
         * @description Adds a reaction to an item.
         * @see {@link https://docs.slack.dev/reference/methods/reactions.add `reactions.add` API reference}.
         */
        add: bindApiCall(this, 'reactions.add'),
        /**
         * @description Gets reactions for an item.
         * @see {@link https://docs.slack.dev/reference/methods/reactions.get `reactions.get` API reference}.
         */
        get: bindApiCall(this, 'reactions.get'),
        /**
         * @description List reactions made by a user.
         * @see {@link https://docs.slack.dev/reference/methods/reactions.list `reactions.list` API reference}.
         */
        list: bindApiCallWithOptionalArgument(this, 'reactions.list'),
        /**
         * @description Removes a reaction from an item.
         * @see {@link https://docs.slack.dev/reference/methods/reactions.remove `reactions.remove` API reference}.
         */
        remove: bindApiCall(this, 'reactions.remove'),
    };
    // TODO: keep tabs on reminders APIs, may be deprecated once Later list APIs land
    // See: https://docs.slack.dev/changelog/2023-07-its-later-already-for-stars-and-reminders
    reminders = {
        /**
         * @description Creates a reminder.
         * @see {@link https://docs.slack.dev/reference/methods/reminders.add `reminders.add` API reference}.
         */
        add: bindApiCall(this, 'reminders.add'),
        /**
         * @description Marks a reminder as complete.
         * @see {@link https://docs.slack.dev/reference/methods/reminders.complete `reminders.complete` API reference}.
         */
        complete: bindApiCall(this, 'reminders.complete'),
        /**
         * @description Deletes a reminder.
         * @see {@link https://docs.slack.dev/reference/methods/reminders.delete `reminders.delete` API reference}.
         */
        delete: bindApiCall(this, 'reminders.delete'),
        /**
         * @description Gets information about a reminder.
         * @see {@link https://docs.slack.dev/reference/methods/reminders.info `reminders.info` API reference}.
         */
        info: bindApiCall(this, 'reminders.info'),
        /**
         * @description Lists all reminders created by or for a given user.
         * @see {@link https://docs.slack.dev/reference/methods/reminders.list `reminders.list` API reference}.
         */
        list: bindApiCallWithOptionalArgument(this, 'reminders.list'),
    };
    rtm = {
        /**
         * @description Starts a Real Time Messaging session.
         * @see {@link https://docs.slack.dev/reference/methods/rtm.connect `rtm.connect` API reference}.
         */
        connect: bindApiCallWithOptionalArgument(this, 'rtm.connect'),
    };
    search = {
        /**
         * @description Searches for messages and files matching a query.
         * @see {@link https://docs.slack.dev/reference/methods/search.all search.all` API reference}.
         */
        all: bindApiCall(this, 'search.all'),
        /**
         * @description Searches for files matching a query.
         * @see {@link https://docs.slack.dev/reference/methods/search.files search.files` API reference}.
         */
        files: bindApiCall(this, 'search.files'),
        /**
         * @description Searches for messages matching a query.
         * @see {@link https://docs.slack.dev/reference/methods/search.messages search.messages` API reference}.
         */
        messages: bindApiCall(this, 'search.messages'),
    };
    slackLists = {
        access: {
            /**
             * @description Delete access for specified entities.
             * @see {@link https://docs.slack.dev/reference/methods/slackLists.access.delete `slackLists.access.delete` API reference}.
             */
            delete: bindApiCall(this, 'slackLists.access.delete'),
            /**
             * @description Set access level for specified entities.
             * @see {@link https://docs.slack.dev/reference/methods/slackLists.access.set `slackLists.access.set` API reference}.
             */
            set: bindApiCall(this, 'slackLists.access.set'),
        },
        /**
         * @description Create a List.
         * @see {@link https://docs.slack.dev/reference/methods/slackLists.create `slackLists.create` API reference}.
         */
        create: bindApiCall(this, 'slackLists.create'),
        download: {
            /**
             * @description Get download job status.
             * @see {@link https://docs.slack.dev/reference/methods/slackLists.download.get `slackLists.download.get` API reference}.
             */
            get: bindApiCall(this, 'slackLists.download.get'),
            /**
             * @description Start a download job for a list.
             * @see {@link https://docs.slack.dev/reference/methods/slackLists.download.start `slackLists.download.start` API reference}.
             */
            start: bindApiCall(this, 'slackLists.download.start'),
        },
        items: {
            /**
             * @description Create a list item.
             * @see {@link https://docs.slack.dev/reference/methods/slackLists.items.create `slackLists.items.create` API reference}.
             */
            create: bindApiCall(this, 'slackLists.items.create'),
            /**
             * @description Delete a list item.
             * @see {@link https://docs.slack.dev/reference/methods/slackLists.items.delete `slackLists.items.delete` API reference}.
             */
            delete: bindApiCall(this, 'slackLists.items.delete'),
            /**
             * @description Delete multiple list items.
             * @see {@link https://docs.slack.dev/reference/methods/slackLists.items.deleteMultiple `slackLists.items.deleteMultiple` API reference}.
             */
            deleteMultiple: bindApiCall(this, 'slackLists.items.deleteMultiple'),
            /**
             * @description Get info about a list item.
             * @see {@link https://docs.slack.dev/reference/methods/slackLists.items.info `slackLists.items.info` API reference}.
             */
            info: bindApiCall(this, 'slackLists.items.info'),
            /**
             * @description Get records from a List.
             * @see {@link https://docs.slack.dev/reference/methods/slackLists.items.list `slackLists.items.list` API reference}.
             */
            list: bindApiCall(this, 'slackLists.items.list'),
            /**
             * @description Update a list item.
             * @see {@link https://docs.slack.dev/reference/methods/slackLists.items.update `slackLists.items.update` API reference}.
             */
            update: bindApiCall(this, 'slackLists.items.update'),
        },
        /**
         * @description Update a list.
         * @see {@link https://docs.slack.dev/reference/methods/slackLists.update `slackLists.update` API reference}.
         */
        update: bindApiCall(this, 'slackLists.update'),
    };
    team = {
        /**
         * @description Gets the access logs for the current team.
         * @see {@link https://docs.slack.dev/reference/methods/team.accessLogs `team.accessLogs` API reference}.
         */
        accessLogs: bindApiCallWithOptionalArgument(this, 'team.accessLogs'),
        /**
         * @description Gets billable users information for the current team.
         * @see {@link https://docs.slack.dev/reference/methods/team.billableInfo `team.billableInfo` API reference}.
         */
        billableInfo: bindApiCallWithOptionalArgument(this, 'team.billableInfo'),
        billing: {
            /**
             * @description Reads a workspace's billing plan information.
             * @see {@link https://docs.slack.dev/reference/methods/team.billing.info `team.billing.info` API reference}.
             */
            info: bindApiCall(this, 'team.billing.info'),
        },
        externalTeams: {
            /**
             * @description Disconnect an external organization.
             * @see {@link https://docs.slack.dev/reference/methods/team.externalTeams.disconnect `team.externalTeams.disconnect` API reference}.
             */
            disconnect: bindApiCall(this, 'team.externalTeams.disconnect'),
            /**
             * @description Returns a list of all the external teams connected and details about the connection.
             * @see {@link https://docs.slack.dev/reference/methods/team.externalTeams.list `team.externalTeams.list` API reference}.
             */
            list: bindApiCall(this, 'team.externalTeams.list'),
        },
        /**
         * @description Gets information about the current team.
         * @see {@link https://docs.slack.dev/reference/methods/team.info `team.info` API reference}.
         */
        info: bindApiCallWithOptionalArgument(this, 'team.info'),
        /**
         * @description Gets the integration logs for the current team.
         * @see {@link https://docs.slack.dev/reference/methods/team.integrationLogs `team.integrationLogs` API reference}.
         */
        integrationLogs: bindApiCallWithOptionalArgument(this, 'team.integrationLogs'),
        preferences: {
            /**
             * @description Retrieve a list of a workspace's team preferences.
             * @see {@link https://docs.slack.dev/reference/methods/team.preferences.list `team.preferences.list` API reference}.
             */
            list: bindApiCallWithOptionalArgument(this, 'team.preferences.list'),
        },
        profile: {
            /**
             * @description Retrieve a team's profile.
             * @see {@link https://docs.slack.dev/reference/methods/team.profile.get `team.profile.get` API reference}.
             */
            get: bindApiCallWithOptionalArgument(this, 'team.profile.get'),
        },
    };
    tooling = {
        tokens: {
            /**
             * @description Exchanges a refresh token for a new app configuration token.
             * @see {@link https://docs.slack.dev/reference/methods/tooling.tokens.rotate `tooling.tokens.rotate` API reference}.
             */
            rotate: bindApiCall(this, 'tooling.tokens.rotate'),
        },
    };
    usergroups = {
        /**
         * @description Create a User Group.
         * @see {@link https://docs.slack.dev/reference/methods/usergroups.create `usergroups.create` API reference}.
         */
        create: bindApiCall(this, 'usergroups.create'),
        /**
         * @description Disable an existing User Group.
         * @see {@link https://docs.slack.dev/reference/methods/usergroups.disable `usergroups.disable` API reference}.
         */
        disable: bindApiCall(this, 'usergroups.disable'),
        /**
         * @description Enable an existing User Group.
         * @see {@link https://docs.slack.dev/reference/methods/usergroups.enable `usergroups.enable` API reference}.
         */
        enable: bindApiCall(this, 'usergroups.enable'),
        /**
         * @description List all User Groups for a team.
         * @see {@link https://docs.slack.dev/reference/methods/usergroups.list `usergroups.list` API reference}.
         */
        list: bindApiCallWithOptionalArgument(this, 'usergroups.list'),
        /**
         * @description Update an existing User Group.
         * @see {@link https://docs.slack.dev/reference/methods/usergroups.update `usergroups.update` API reference}.
         */
        update: bindApiCall(this, 'usergroups.update'),
        users: {
            /**
             * @description List all users in a User Group.
             * @see {@link https://docs.slack.dev/reference/methods/usergroups.users.list `usergroups.users.list` API reference}.
             */
            list: bindApiCall(this, 'usergroups.users.list'),
            /**
             * @description Update the list of users in a User Group.
             * @see {@link https://docs.slack.dev/reference/methods/usergroups.users.update `usergroups.users.update` API reference}.
             */
            update: bindApiCall(this, 'usergroups.users.update'),
        },
    };
    users = {
        /**
         * @description List conversations the calling user may access.
         * @see {@link https://docs.slack.dev/reference/methods/users.conversations `users.conversations` API reference}.
         */
        conversations: bindApiCall(this, 'users.conversations'),
        /**
         * @description Delete the user profile photo.
         * @see {@link https://docs.slack.dev/reference/methods/users.deletePhoto `users.deletePhoto` API reference}.
         */
        deletePhoto: bindApiCall(this, 'users.deletePhoto'),
        discoverableContacts: {
            /**
             * @description Lookup an email address to see if someone is on Slack.
             * @see {@link https://docs.slack.dev/reference/methods/users.discoverableContacts.lookup `users.discoverableContacts.lookup` API reference}.
             */
            lookup: bindApiCall(this, 'users.discoverableContacts.lookup'),
        },
        /**
         * @description Gets user presence information.
         * @see {@link https://docs.slack.dev/reference/methods/users.getPresence `users.getPresence` API reference}.
         */
        getPresence: bindApiCall(this, 'users.getPresence'),
        /**
         * @description Get a user's identity.
         * @see {@link https://docs.slack.dev/reference/methods/users.identity `users.identity` API reference}.
         */
        identity: bindApiCall(this, 'users.identity'),
        /**
         * @description Gets information about a user.
         * @see {@link https://docs.slack.dev/reference/methods/users.info `users.info` API reference}.
         */
        info: bindApiCall(this, 'users.info'),
        /**
         * @description Lists all users in a Slack team.
         * @see {@link https://docs.slack.dev/reference/methods/users.list `users.list` API reference}.
         */
        list: bindApiCall(this, 'users.list'),
        /**
         * @description Find a user with an email address.
         * @see {@link https://docs.slack.dev/reference/methods/users.lookupByEmail `users.lookupByEmail` API reference}.
         */
        lookupByEmail: bindApiCall(this, 'users.lookupByEmail'),
        /**
         * @description Set the user profile photo.
         * @see {@link https://docs.slack.dev/reference/methods/users.setPhoto `users.setPhoto` API reference}.
         */
        setPhoto: bindApiCall(this, 'users.setPhoto'),
        /**
         * @description Manually sets user presence.
         * @see {@link https://docs.slack.dev/reference/methods/users.setPresence `users.setPresence` API reference}.
         */
        setPresence: bindApiCall(this, 'users.setPresence'),
        profile: {
            /**
             * @description Retrieve a user's profile information, including their custom status.
             * @see {@link https://docs.slack.dev/reference/methods/users.profile.get `users.profile.get` API reference}.
             */
            get: bindApiCall(this, 'users.profile.get'),
            /**
             * @description Set a user's profile information, including custom status.
             * @see {@link https://docs.slack.dev/reference/methods/users.profile.set `users.profile.set` API reference}.
             */
            set: bindApiCall(this, 'users.profile.set'),
        },
    };
    views = {
        /**
         * @description Open a view for a user.
         * @see {@link https://docs.slack.dev/reference/methods/views.open `views.open` API reference}.
         */
        open: bindApiCall(this, 'views.open'),
        /**
         * @description Publish a static view for a user.
         * @see {@link https://docs.slack.dev/reference/methods/views.publish `views.publish` API reference}.
         */
        publish: bindApiCall(this, 'views.publish'),
        /**
         * @description Push a view onto the stack of a root view.
         * @see {@link https://docs.slack.dev/reference/methods/views.push `views.push` API reference}.
         */
        push: bindApiCall(this, 'views.push'),
        /**
         * @description Update an existing view.
         * @see {@link https://docs.slack.dev/reference/methods/views.update `views.update` API reference}.
         */
        update: bindApiCall(this, 'views.update'),
    };
    // ------------------
    // Deprecated methods
    // ------------------
    // TODO: breaking changes for future majors:
    // - stars.* methods are marked as deprecated; once Later has APIs, these will see an official sunsetting timeline
    stars = {
        /**
         * @description Save an item for later. Formerly known as adding a star.
         * @deprecated Stars can still be added but they can no longer be viewed or interacted with by end-users.
         * See {@link https://docs.slack.dev/changelog/2023-07-its-later-already-for-stars-and-reminders our post on stars and the Later list}.
         * @see {@link https://docs.slack.dev/reference/methods/stars.add `stars.add` API reference}.
         */
        add: bindApiCall(this, 'stars.add'),
        /**
         * @description List a user's saved items, formerly known as stars.
         * @deprecated Stars can still be listed but they can no longer be viewed or interacted with by end-users.
         * See {@link https://docs.slack.dev/changelog/2023-07-its-later-already-for-stars-and-reminders our post on stars and the Later list}.
         * @see {@link https://docs.slack.dev/reference/methods/stars.list `stars.list` API reference}.
         */
        list: bindApiCall(this, 'stars.list'),
        /**
         * @description Remove a saved item from a user's saved items, formerly known as stars.
         * @deprecated Stars can still be removed but they can no longer be viewed or interacted with by end-users.
         * See {@link https://docs.slack.dev/changelog/2023-07-its-later-already-for-stars-and-reminders our post on stars and the Later list}.
         * @see {@link https://docs.slack.dev/reference/methods/stars.remove `stars.remove` API reference}.
         */
        remove: bindApiCall(this, 'stars.remove'),
    };
    workflows = {
        featured: {
            /**
             * @description Add featured workflows to a channel.
             * @see {@link https://docs.slack.dev/reference/methods/workflows.featured.add `workflows.featured.add` API reference}.
             */
            add: bindApiCall(this, 'workflows.featured.add'),
            /**
             * @description List the featured workflows for specified channels.
             * @see {@link https://docs.slack.dev/reference/methods/workflows.featured.list `workflows.featured.list` API reference}.
             */
            list: bindApiCall(this, 'workflows.featured.list'),
            /**
             * @description Remove featured workflows from a channel.
             * @see {@link https://docs.slack.dev/reference/methods/workflows.featured.remove `workflows.featured.remove` API reference}.
             */
            remove: bindApiCall(this, 'workflows.featured.remove'),
            /**
             * @description Set featured workflows for a channel.
             * @see {@link https://docs.slack.dev/reference/methods/workflows.featured.set `workflows.featured.set` API reference}.
             */
            set: bindApiCall(this, 'workflows.featured.set'),
        },
    };
}
exports.Methods = Methods;
__exportStar(__nccwpck_require__(4775), exports);
//# sourceMappingURL=methods.js.map

/***/ }),

/***/ 1766:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rapidRetryPolicy = exports.fiveRetriesInFiveMinutes = exports.tenRetriesInAboutThirtyMinutes = void 0;
/**
 * The default retry policy. Retry up to 10 times, over the span of about 30 minutes. It's not exact because
 * randomization has been added to prevent a stampeding herd problem (if all instances in your application are retrying
 * a request at the exact same intervals, they are more likely to cause failures for each other).
 */
exports.tenRetriesInAboutThirtyMinutes = {
    retries: 10,
    factor: 1.96821,
    randomize: true,
};
/**
 * Short & sweet, five retries in five minutes and then bail.
 */
exports.fiveRetriesInFiveMinutes = {
    retries: 5,
    factor: 3.86,
};
/**
 * This policy is just to keep the tests running fast.
 */
exports.rapidRetryPolicy = {
    minTimeout: 0,
    maxTimeout: 1,
};
const policies = {
    tenRetriesInAboutThirtyMinutes: exports.tenRetriesInAboutThirtyMinutes,
    fiveRetriesInFiveMinutes: exports.fiveRetriesInFiveMinutes,
    rapidRetryPolicy: exports.rapidRetryPolicy,
};
exports["default"] = policies;
//# sourceMappingURL=retry-policies.js.map

/***/ }),

/***/ 381:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5591:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2415:
/***/ ((module) => {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ 2766:
/***/ ((module) => {

"use strict";

module.exports = (promise, onFinally) => {
	onFinally = onFinally || (() => {});

	return promise.then(
		val => new Promise(resolve => {
			resolve(onFinally());
		}).then(() => val),
		err => new Promise(resolve => {
			resolve(onFinally());
		}).then(() => {
			throw err;
		})
	);
};


/***/ }),

/***/ 6459:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const EventEmitter = __nccwpck_require__(301);
const p_timeout_1 = __nccwpck_require__(4802);
const priority_queue_1 = __nccwpck_require__(5905);
// eslint-disable-next-line @typescript-eslint/no-empty-function
const empty = () => { };
const timeoutError = new p_timeout_1.TimeoutError();
/**
Promise queue with concurrency control.
*/
class PQueue extends EventEmitter {
    constructor(options) {
        var _a, _b, _c, _d;
        super();
        this._intervalCount = 0;
        this._intervalEnd = 0;
        this._pendingCount = 0;
        this._resolveEmpty = empty;
        this._resolveIdle = empty;
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        options = Object.assign({ carryoverConcurrencyCount: false, intervalCap: Infinity, interval: 0, concurrency: Infinity, autoStart: true, queueClass: priority_queue_1.default }, options);
        if (!(typeof options.intervalCap === 'number' && options.intervalCap >= 1)) {
            throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ''}\` (${typeof options.intervalCap})`);
        }
        if (options.interval === undefined || !(Number.isFinite(options.interval) && options.interval >= 0)) {
            throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ''}\` (${typeof options.interval})`);
        }
        this._carryoverConcurrencyCount = options.carryoverConcurrencyCount;
        this._isIntervalIgnored = options.intervalCap === Infinity || options.interval === 0;
        this._intervalCap = options.intervalCap;
        this._interval = options.interval;
        this._queue = new options.queueClass();
        this._queueClass = options.queueClass;
        this.concurrency = options.concurrency;
        this._timeout = options.timeout;
        this._throwOnTimeout = options.throwOnTimeout === true;
        this._isPaused = options.autoStart === false;
    }
    get _doesIntervalAllowAnother() {
        return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
    }
    get _doesConcurrentAllowAnother() {
        return this._pendingCount < this._concurrency;
    }
    _next() {
        this._pendingCount--;
        this._tryToStartAnother();
        this.emit('next');
    }
    _resolvePromises() {
        this._resolveEmpty();
        this._resolveEmpty = empty;
        if (this._pendingCount === 0) {
            this._resolveIdle();
            this._resolveIdle = empty;
            this.emit('idle');
        }
    }
    _onResumeInterval() {
        this._onInterval();
        this._initializeIntervalIfNeeded();
        this._timeoutId = undefined;
    }
    _isIntervalPaused() {
        const now = Date.now();
        if (this._intervalId === undefined) {
            const delay = this._intervalEnd - now;
            if (delay < 0) {
                // Act as the interval was done
                // We don't need to resume it here because it will be resumed on line 160
                this._intervalCount = (this._carryoverConcurrencyCount) ? this._pendingCount : 0;
            }
            else {
                // Act as the interval is pending
                if (this._timeoutId === undefined) {
                    this._timeoutId = setTimeout(() => {
                        this._onResumeInterval();
                    }, delay);
                }
                return true;
            }
        }
        return false;
    }
    _tryToStartAnother() {
        if (this._queue.size === 0) {
            // We can clear the interval ("pause")
            // Because we can redo it later ("resume")
            if (this._intervalId) {
                clearInterval(this._intervalId);
            }
            this._intervalId = undefined;
            this._resolvePromises();
            return false;
        }
        if (!this._isPaused) {
            const canInitializeInterval = !this._isIntervalPaused();
            if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
                const job = this._queue.dequeue();
                if (!job) {
                    return false;
                }
                this.emit('active');
                job();
                if (canInitializeInterval) {
                    this._initializeIntervalIfNeeded();
                }
                return true;
            }
        }
        return false;
    }
    _initializeIntervalIfNeeded() {
        if (this._isIntervalIgnored || this._intervalId !== undefined) {
            return;
        }
        this._intervalId = setInterval(() => {
            this._onInterval();
        }, this._interval);
        this._intervalEnd = Date.now() + this._interval;
    }
    _onInterval() {
        if (this._intervalCount === 0 && this._pendingCount === 0 && this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = undefined;
        }
        this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
        this._processQueue();
    }
    /**
    Executes all queued functions until it reaches the limit.
    */
    _processQueue() {
        // eslint-disable-next-line no-empty
        while (this._tryToStartAnother()) { }
    }
    get concurrency() {
        return this._concurrency;
    }
    set concurrency(newConcurrency) {
        if (!(typeof newConcurrency === 'number' && newConcurrency >= 1)) {
            throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
        }
        this._concurrency = newConcurrency;
        this._processQueue();
    }
    /**
    Adds a sync or async task to the queue. Always returns a promise.
    */
    async add(fn, options = {}) {
        return new Promise((resolve, reject) => {
            const run = async () => {
                this._pendingCount++;
                this._intervalCount++;
                try {
                    const operation = (this._timeout === undefined && options.timeout === undefined) ? fn() : p_timeout_1.default(Promise.resolve(fn()), (options.timeout === undefined ? this._timeout : options.timeout), () => {
                        if (options.throwOnTimeout === undefined ? this._throwOnTimeout : options.throwOnTimeout) {
                            reject(timeoutError);
                        }
                        return undefined;
                    });
                    resolve(await operation);
                }
                catch (error) {
                    reject(error);
                }
                this._next();
            };
            this._queue.enqueue(run, options);
            this._tryToStartAnother();
            this.emit('add');
        });
    }
    /**
    Same as `.add()`, but accepts an array of sync or async functions.

    @returns A promise that resolves when all functions are resolved.
    */
    async addAll(functions, options) {
        return Promise.all(functions.map(async (function_) => this.add(function_, options)));
    }
    /**
    Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
    */
    start() {
        if (!this._isPaused) {
            return this;
        }
        this._isPaused = false;
        this._processQueue();
        return this;
    }
    /**
    Put queue execution on hold.
    */
    pause() {
        this._isPaused = true;
    }
    /**
    Clear the queue.
    */
    clear() {
        this._queue = new this._queueClass();
    }
    /**
    Can be called multiple times. Useful if you for example add additional items at a later time.

    @returns A promise that settles when the queue becomes empty.
    */
    async onEmpty() {
        // Instantly resolve if the queue is empty
        if (this._queue.size === 0) {
            return;
        }
        return new Promise(resolve => {
            const existingResolve = this._resolveEmpty;
            this._resolveEmpty = () => {
                existingResolve();
                resolve();
            };
        });
    }
    /**
    The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.

    @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
    */
    async onIdle() {
        // Instantly resolve if none pending and if nothing else is queued
        if (this._pendingCount === 0 && this._queue.size === 0) {
            return;
        }
        return new Promise(resolve => {
            const existingResolve = this._resolveIdle;
            this._resolveIdle = () => {
                existingResolve();
                resolve();
            };
        });
    }
    /**
    Size of the queue.
    */
    get size() {
        return this._queue.size;
    }
    /**
    Size of the queue, filtered by the given options.

    For example, this can be used to find the number of items remaining in the queue with a specific priority level.
    */
    sizeBy(options) {
        // eslint-disable-next-line unicorn/no-fn-reference-in-iterator
        return this._queue.filter(options).length;
    }
    /**
    Number of pending promises.
    */
    get pending() {
        return this._pendingCount;
    }
    /**
    Whether the queue is currently paused.
    */
    get isPaused() {
        return this._isPaused;
    }
    get timeout() {
        return this._timeout;
    }
    /**
    Set the timeout for future operations.
    */
    set timeout(milliseconds) {
        this._timeout = milliseconds;
    }
}
exports["default"] = PQueue;


/***/ }),

/***/ 9015:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// Port of lower_bound from https://en.cppreference.com/w/cpp/algorithm/lower_bound
// Used to compute insertion index to keep queue sorted after insertion
function lowerBound(array, value, comparator) {
    let first = 0;
    let count = array.length;
    while (count > 0) {
        const step = (count / 2) | 0;
        let it = first + step;
        if (comparator(array[it], value) <= 0) {
            first = ++it;
            count -= step + 1;
        }
        else {
            count = step;
        }
    }
    return first;
}
exports["default"] = lowerBound;


/***/ }),

/***/ 5905:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const lower_bound_1 = __nccwpck_require__(9015);
class PriorityQueue {
    constructor() {
        this._queue = [];
    }
    enqueue(run, options) {
        options = Object.assign({ priority: 0 }, options);
        const element = {
            priority: options.priority,
            run
        };
        if (this.size && this._queue[this.size - 1].priority >= options.priority) {
            this._queue.push(element);
            return;
        }
        const index = lower_bound_1.default(this._queue, element, (a, b) => b.priority - a.priority);
        this._queue.splice(index, 0, element);
    }
    dequeue() {
        const item = this._queue.shift();
        return item === null || item === void 0 ? void 0 : item.run;
    }
    filter(options) {
        return this._queue.filter((element) => element.priority === options.priority).map((element) => element.run);
    }
    get size() {
        return this._queue.length;
    }
}
exports["default"] = PriorityQueue;


/***/ }),

/***/ 301:
/***/ ((module) => {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ 2103:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const retry = __nccwpck_require__(5546);

const networkErrorMsgs = [
	'Failed to fetch', // Chrome
	'NetworkError when attempting to fetch resource.', // Firefox
	'The Internet connection appears to be offline.', // Safari
	'Network request failed' // `cross-fetch`
];

class AbortError extends Error {
	constructor(message) {
		super();

		if (message instanceof Error) {
			this.originalError = message;
			({message} = message);
		} else {
			this.originalError = new Error(message);
			this.originalError.stack = this.stack;
		}

		this.name = 'AbortError';
		this.message = message;
	}
}

const decorateErrorWithCounts = (error, attemptNumber, options) => {
	// Minus 1 from attemptNumber because the first attempt does not count as a retry
	const retriesLeft = options.retries - (attemptNumber - 1);

	error.attemptNumber = attemptNumber;
	error.retriesLeft = retriesLeft;
	return error;
};

const isNetworkError = errorMessage => networkErrorMsgs.includes(errorMessage);

const pRetry = (input, options) => new Promise((resolve, reject) => {
	options = {
		onFailedAttempt: () => {},
		retries: 10,
		...options
	};

	const operation = retry.operation(options);

	operation.attempt(async attemptNumber => {
		try {
			resolve(await input(attemptNumber));
		} catch (error) {
			if (!(error instanceof Error)) {
				reject(new TypeError(`Non-error was thrown: "${error}". You should only throw errors.`));
				return;
			}

			if (error instanceof AbortError) {
				operation.stop();
				reject(error.originalError);
			} else if (error instanceof TypeError && !isNetworkError(error.message)) {
				operation.stop();
				reject(error);
			} else {
				decorateErrorWithCounts(error, attemptNumber, options);

				try {
					await options.onFailedAttempt(error);
				} catch (error) {
					reject(error);
					return;
				}

				if (!operation.retry(error)) {
					reject(operation.mainError());
				}
			}
		}
	});
});

module.exports = pRetry;
// TODO: remove this in the next major version
module.exports["default"] = pRetry;

module.exports.AbortError = AbortError;


/***/ }),

/***/ 4802:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const pFinally = __nccwpck_require__(2766);

class TimeoutError extends Error {
	constructor(message) {
		super(message);
		this.name = 'TimeoutError';
	}
}

const pTimeout = (promise, milliseconds, fallback) => new Promise((resolve, reject) => {
	if (typeof milliseconds !== 'number' || milliseconds < 0) {
		throw new TypeError('Expected `milliseconds` to be a positive number');
	}

	if (milliseconds === Infinity) {
		resolve(promise);
		return;
	}

	const timer = setTimeout(() => {
		if (typeof fallback === 'function') {
			try {
				resolve(fallback());
			} catch (error) {
				reject(error);
			}

			return;
		}

		const message = typeof fallback === 'string' ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
		const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);

		if (typeof promise.cancel === 'function') {
			promise.cancel();
		}

		reject(timeoutError);
	}, milliseconds);

	// TODO: Use native `finally` keyword when targeting Node.js 10
	pFinally(
		// eslint-disable-next-line promise/prefer-await-to-then
		promise.then(resolve, reject),
		() => {
			clearTimeout(timer);
		}
	);
});

module.exports = pTimeout;
// TODO: Remove this for the next major release
module.exports["default"] = pTimeout;

module.exports.TimeoutError = TimeoutError;


/***/ }),

/***/ 5546:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(7084);

/***/ }),

/***/ 7084:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

var RetryOperation = __nccwpck_require__(9538);

exports.operation = function(options) {
  var timeouts = exports.timeouts(options);
  return new RetryOperation(timeouts, {
      forever: options && (options.forever || options.retries === Infinity),
      unref: options && options.unref,
      maxRetryTime: options && options.maxRetryTime
  });
};

exports.timeouts = function(options) {
  if (options instanceof Array) {
    return [].concat(options);
  }

  var opts = {
    retries: 10,
    factor: 2,
    minTimeout: 1 * 1000,
    maxTimeout: Infinity,
    randomize: false
  };
  for (var key in options) {
    opts[key] = options[key];
  }

  if (opts.minTimeout > opts.maxTimeout) {
    throw new Error('minTimeout is greater than maxTimeout');
  }

  var timeouts = [];
  for (var i = 0; i < opts.retries; i++) {
    timeouts.push(this.createTimeout(i, opts));
  }

  if (options && options.forever && !timeouts.length) {
    timeouts.push(this.createTimeout(i, opts));
  }

  // sort the array numerically ascending
  timeouts.sort(function(a,b) {
    return a - b;
  });

  return timeouts;
};

exports.createTimeout = function(attempt, opts) {
  var random = (opts.randomize)
    ? (Math.random() + 1)
    : 1;

  var timeout = Math.round(random * Math.max(opts.minTimeout, 1) * Math.pow(opts.factor, attempt));
  timeout = Math.min(timeout, opts.maxTimeout);

  return timeout;
};

exports.wrap = function(obj, options, methods) {
  if (options instanceof Array) {
    methods = options;
    options = null;
  }

  if (!methods) {
    methods = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function') {
        methods.push(key);
      }
    }
  }

  for (var i = 0; i < methods.length; i++) {
    var method   = methods[i];
    var original = obj[method];

    obj[method] = function retryWrapper(original) {
      var op       = exports.operation(options);
      var args     = Array.prototype.slice.call(arguments, 1);
      var callback = args.pop();

      args.push(function(err) {
        if (op.retry(err)) {
          return;
        }
        if (err) {
          arguments[0] = op.mainError();
        }
        callback.apply(this, arguments);
      });

      op.attempt(function() {
        original.apply(obj, args);
      });
    }.bind(obj, original);
    obj[method].options = options;
  }
};


/***/ }),

/***/ 9538:
/***/ ((module) => {

function RetryOperation(timeouts, options) {
  // Compatibility for the old (timeouts, retryForever) signature
  if (typeof options === 'boolean') {
    options = { forever: options };
  }

  this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
  this._timeouts = timeouts;
  this._options = options || {};
  this._maxRetryTime = options && options.maxRetryTime || Infinity;
  this._fn = null;
  this._errors = [];
  this._attempts = 1;
  this._operationTimeout = null;
  this._operationTimeoutCb = null;
  this._timeout = null;
  this._operationStart = null;
  this._timer = null;

  if (this._options.forever) {
    this._cachedTimeouts = this._timeouts.slice(0);
  }
}
module.exports = RetryOperation;

RetryOperation.prototype.reset = function() {
  this._attempts = 1;
  this._timeouts = this._originalTimeouts.slice(0);
}

RetryOperation.prototype.stop = function() {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }
  if (this._timer) {
    clearTimeout(this._timer);
  }

  this._timeouts       = [];
  this._cachedTimeouts = null;
};

RetryOperation.prototype.retry = function(err) {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }

  if (!err) {
    return false;
  }
  var currentTime = new Date().getTime();
  if (err && currentTime - this._operationStart >= this._maxRetryTime) {
    this._errors.push(err);
    this._errors.unshift(new Error('RetryOperation timeout occurred'));
    return false;
  }

  this._errors.push(err);

  var timeout = this._timeouts.shift();
  if (timeout === undefined) {
    if (this._cachedTimeouts) {
      // retry forever, only keep last error
      this._errors.splice(0, this._errors.length - 1);
      timeout = this._cachedTimeouts.slice(-1);
    } else {
      return false;
    }
  }

  var self = this;
  this._timer = setTimeout(function() {
    self._attempts++;

    if (self._operationTimeoutCb) {
      self._timeout = setTimeout(function() {
        self._operationTimeoutCb(self._attempts);
      }, self._operationTimeout);

      if (self._options.unref) {
          self._timeout.unref();
      }
    }

    self._fn(self._attempts);
  }, timeout);

  if (this._options.unref) {
      this._timer.unref();
  }

  return true;
};

RetryOperation.prototype.attempt = function(fn, timeoutOps) {
  this._fn = fn;

  if (timeoutOps) {
    if (timeoutOps.timeout) {
      this._operationTimeout = timeoutOps.timeout;
    }
    if (timeoutOps.cb) {
      this._operationTimeoutCb = timeoutOps.cb;
    }
  }

  var self = this;
  if (this._operationTimeoutCb) {
    this._timeout = setTimeout(function() {
      self._operationTimeoutCb();
    }, self._operationTimeout);
  }

  this._operationStart = new Date().getTime();

  this._fn(this._attempts);
};

RetryOperation.prototype.try = function(fn) {
  console.log('Using RetryOperation.try() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = function(fn) {
  console.log('Using RetryOperation.start() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = RetryOperation.prototype.try;

RetryOperation.prototype.errors = function() {
  return this._errors;
};

RetryOperation.prototype.attempts = function() {
  return this._attempts;
};

RetryOperation.prototype.mainError = function() {
  if (this._errors.length === 0) {
    return null;
  }

  var counts = {};
  var mainError = null;
  var mainErrorCount = 0;

  for (var i = 0; i < this._errors.length; i++) {
    var error = this._errors[i];
    var message = error.message;
    var count = (counts[message] || 0) + 1;

    counts[message] = count;

    if (count >= mainErrorCount) {
      mainError = error;
      mainErrorCount = count;
    }
  }

  return mainError;
};


/***/ }),

/***/ 2613:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 5317:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 6982:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 4434:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 9896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 8611:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 9278:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 4589:
/***/ ((module) => {

"use strict";
module.exports = require("node:assert");

/***/ }),

/***/ 6698:
/***/ ((module) => {

"use strict";
module.exports = require("node:async_hooks");

/***/ }),

/***/ 6954:
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ 7540:
/***/ ((module) => {

"use strict";
module.exports = require("node:console");

/***/ }),

/***/ 7598:
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ 3053:
/***/ ((module) => {

"use strict";
module.exports = require("node:diagnostics_channel");

/***/ }),

/***/ 610:
/***/ ((module) => {

"use strict";
module.exports = require("node:dns");

/***/ }),

/***/ 8474:
/***/ ((module) => {

"use strict";
module.exports = require("node:events");

/***/ }),

/***/ 3024:
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 7067:
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ 2467:
/***/ ((module) => {

"use strict";
module.exports = require("node:http2");

/***/ }),

/***/ 7030:
/***/ ((module) => {

"use strict";
module.exports = require("node:net");

/***/ }),

/***/ 8161:
/***/ ((module) => {

"use strict";
module.exports = require("node:os");

/***/ }),

/***/ 6760:
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 643:
/***/ ((module) => {

"use strict";
module.exports = require("node:perf_hooks");

/***/ }),

/***/ 1792:
/***/ ((module) => {

"use strict";
module.exports = require("node:querystring");

/***/ }),

/***/ 7075:
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ 1692:
/***/ ((module) => {

"use strict";
module.exports = require("node:tls");

/***/ }),

/***/ 3136:
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ 7975:
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ 3429:
/***/ ((module) => {

"use strict";
module.exports = require("node:util/types");

/***/ }),

/***/ 5919:
/***/ ((module) => {

"use strict";
module.exports = require("node:worker_threads");

/***/ }),

/***/ 8522:
/***/ ((module) => {

"use strict";
module.exports = require("node:zlib");

/***/ }),

/***/ 857:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 6928:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 3193:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 3557:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 4756:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 9023:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 6734:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"@slack/web-api","version":"8.2.0","description":"Official library for using the Slack Platform\'s Web API","author":"Slack Technologies, LLC","license":"MIT","keywords":["slack","web-api","bot","client","http","api","proxy","rate-limiting","pagination"],"main":"dist/index.js","types":"./dist/index.d.ts","files":["dist/**/*"],"engines":{"node":">= 20","npm":">=9.6.4"},"repository":{"type":"git","url":"git+https://github.com/slackapi/node-slack-sdk.git"},"homepage":"https://docs.slack.dev/tools/node-slack-sdk/web-api/","publishConfig":{"access":"public"},"bugs":{"url":"https://github.com/slackapi/node-slack-sdk/issues"},"scripts":{"build":"npm run build:clean && tsc","build:clean":"shx rm -rf ./dist","docs":"npx typedoc --plugin typedoc-plugin-markdown","prepack":"npm run build","test":"npm run build && bash -c \'node --test-reporter=spec --test-reporter-destination=stdout --test-reporter=junit --test-reporter-destination=test-results.xml --import tsx --test src/*.test.ts\'","test:coverage":"npm run build && node --experimental-test-coverage --test-reporter=spec --test-reporter-destination=stdout --test-reporter=lcov --test-reporter-destination=lcov.info --test-reporter=junit --test-reporter-destination=test-results.xml --import tsx --test src/*.test.ts","test:integration":"npm run build && node test/integration/commonjs-project/index.js && node test/integration/esm-project/index.mjs && npm run test:integration:ts","test:integration:ts":"cd test/integration/ts-4.7-project && npm i && npm run build","test:types":"tsd","watch":"npx nodemon --watch \'src\' --ext \'ts\' --exec npm run build"},"dependencies":{"@slack/logger":"^5.0.0","@slack/types":"^3.2.0","@types/node":">=20","@types/retry":"0.12.5","eventemitter3":"^5.0.1","p-queue":"^6.6.2","p-retry":"^4.6.2","retry":"^0.13.1"},"devDependencies":{"@types/busboy":"^1.5.4","@types/sinon":"^22.0.0","busboy":"^1","nock":"^14.0.17","sinon":"^22.1.0","tsd":"^0.33.0"},"tsd":{"directory":"test/types"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nccwpck_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/asset-relocator-loader */
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__nccwpck_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__nccwpck_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__nccwpck_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__nccwpck_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__nccwpck_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__nccwpck_require__.f).reduce((promises, key) => {
/******/ 				__nccwpck_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__nccwpck_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".index.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			792: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__nccwpck_require__.o(moreModules, moduleId)) {
/******/ 					__nccwpck_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__nccwpck_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__nccwpck_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __nccwpck_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const lookupUser = __nccwpck_require__(6799);

__nccwpck_require__.e(/* import() */ 421).then(__nccwpck_require__.bind(__nccwpck_require__, 6421)).then(core => lookupUser(core));

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map