/**
 * @group Error
 * @remarks List all errors generated by the backend with their descriptions
 */
export const Error = {
  NO_ACTIVITY: "Session closed due to no activity.",
  WRONG_CREDENTIALS: "Application credentials are invalid. Please check or regenerate your application key and hmackey.",
  TOO_OLD: "Session is too old. Max Session Duration Reached.",
  UNKNOW: "An unknown error has occurred.",
  ABNORMAL_CLOSURE: "MyScript recognition server is not reachable.",
  CANT_ESTABLISH: "Unable to establish a connection to MyScript recognition server. Check the host and your connectivity.",
  GOING_AWAY: "MyScript recognition server is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection.",
  PROTOCOL_ERROR: "MyScript recognition server terminated the connection due to a protocol error.",
  UNSUPPORTED_DATA: "MyScript recognition server terminated the connection because the endpoint received data of a type it cannot accept. (For example, a text-only endpoint received binary data.)",
  INVALID_FRAME_PAULOAD: "MyScript recognition server terminated the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message).",
  POLICY_VIOLATION: "MyScript recognition server terminated the connection because it received a message that violates its policy.",
  MESSAGE_TOO_BIG: "MyScript recognition server terminated the connection because a data frame was received that is too large.",
  INTERNAL_ERROR: "MyScript recognition server terminated the connection because it encountered an unexpected condition that prevented it from fulfilling the request.",
  SERVICE_RESTART: "MyScript recognition server terminated the connection because it is restarting.",
  TRY_AGAIN: "MyScript recognition server terminated the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients.",
  BAD_GATEWAY: "MyScript recognition server was acting as a gateway or proxy and received an invalid response from the upstream server.",
  TLS_HANDSHAKE: "MyScript recognition server connection was closed due to a failure to perform a TLS handshake"
} as const

/**
 * @event
 * @remarks Lists all events that can be listened to on the editor or DOM element
 */
export const EventType = {
  /**
   * @event
   * event emitted when history has changed i.e. the context of undo-redo
   */
  CHANGED: "changed",
  /**
   * @event
   * event emitted when clearing is complete
   */
  CLEARED: "cleared",
  /**
   * @event
   * event emitted after the conversion is complete
   */
  CONVERTED: "converted",
  /**
   * @event
   * event emitted when the editor encounters an error
   */
  ERROR: "error",
  /**
   * @event
   * event emitted on click on pointer events
   */
  POINTEREVENTS: "pointer_events",
  /**
   * @event
   * event emitted after the end of the export
   */
  EXPORTED: "exported",
  /**
   * @event
   * event emitted after the end of the import
   */
  IMPORTED: "imported",
  /**
   * @event
   * event emitted when the server is idle after a job
   */
  IDLE: "idle",
  /**
   * @event
   * event emitted after full editor initialization
   */
  LOADED: "loaded",
} as const

/**
 * @internal
 */
export const InternalEventType = {
  SVG_PATCH: "internal_svg_patch",
  EXPORTED: "internal_exported",
  CLEAR_MESSAGE: "internal_clear_message",
  ERROR: "internal_error",
  NOTIF: "internal_notif",
  IMPORT_JIIX: "internal_import_jiix",
  CONVERT: "internal_convert",
  CLEAR: "internal_clear",
  CONTEXT_CHANGE: "internal_context_change",
  IDLE: "internal_idle",
  WS_CLOSED: "internal_websocket_closed",
} as const

/**
 * @internal
 */
export const WSMessage = {
  CLOSE_RECOGNIZER: "CLOSE_RECOGNIZER"
}

/**
 * @group Export
 * @remarks List all supported MIME types for export.
 * @remarks Attention, the MIME types supported depend on the {@link TRecognitionType | type of recognition}
 */
export const Exports = {
  JIIX: "application/vnd.myscript.jiix",
  TEXT: "text/plain",
  LATEX: "application/x-latex",
  MATHML: "application/mathml+xml",
  SVG: "image/svg+xml",
  OFFICE_DOCUMENT: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
} as const

/**
 * @group Editor
 * @remarks List the possibilities of interactions
 */
export const enum ModeInteraction
{
  Writing = "writing",
  Erasing = "erasing",
  // Selecting = "selecting"
}

export { LOGGER_CLASS, LOGGER_LEVEL  } from "./@types/configuration/LoggerConfiguration"

/**
 * @group Constants
 */
export default {
  Error,
  EventType,
  InternalEventType,
  Exports,
  WSMessage,
} as const
