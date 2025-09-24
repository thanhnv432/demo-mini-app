const BUTTON_SIZE = ["mini", "small", "middle", "large"] as const;
const BUTTON_COLOR = ["primary", "success", "danger", "warning"] as const;
const BUTTON_SHAPE = ["none", "solid", "outline"] as const;

export type ButtonSize = typeof BUTTON_SIZE[number];
export type ButtonColor = typeof BUTTON_COLOR[number];
export type ButtonShape = typeof BUTTON_SHAPE[number];