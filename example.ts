import { writeHyperKeyImage } from "./lib/svg.ts";
import {
    HyperKey,
    KarabinerComplexModifications,
    Key,
} from "./lib/karabiner.ts";
// import { writeHyperKeyImage } from "https://deno.land/x/karabiner@v0.1.1/svg.ts";
// import {
//     HyperKey,
//     KarabinerComplexModifications,
// } from "https://deno.land/x/karabiner@v0.1.1/karabiner.ts";

const hyper1 = new HyperKey({
    id: "hyper1",
    description: "Caps Lock",
    from: {
        key_code: "caps_lock",
    },
    to_if_alone: [
        {
            key_code: "escape",
        },
    ],
});

const hyper2 = new HyperKey({
    id: "hyper2",
    description: "Alt Gr / Right Command",
    from: {
        key_code: "right_command",
        modifiers: {
            optional: ["left_shift"],
        },
    },
});

hyper1.bindKey({
    symbol: `"`,
    description: "double quote",
    key: "k",
    to: {
        key_code: "2",
        modifiers: ["left_shift"],
    },
});

hyper1.bindKey({
    symbol: "'",
    description: "single quote",
    key: "j",
    to: {
        key_code: "non_us_pound",
    },
});

hyper1.bindKey({
    symbol: "|",
    description: "pipe",
    key: "y",
    to: {
        key_code: "7",
        modifiers: ["left_option"],
    },
});

hyper1.bindKey({
    symbol: ";",
    description: "semicolon",
    key: "n",
    to: {
        key_code: "comma",
        modifiers: ["left_shift"],
    },
});

hyper1.bindKey({
    symbol: ":",
    description: "colon",
    key: "m",
    to: {
        key_code: "period",
        modifiers: ["left_shift"],
    },
});

hyper1.bindKey({
    symbol: "`",
    description: "backtick",
    key: "h",
    to: [
        {
            key_code: "equal_sign",
            modifiers: ["left_shift"],
        },
        {
            key_code: "spacebar",
        },
    ],
});

hyper2.bindKey({
    symbol: "=",
    description: "equals",
    key: "b",
    to: {
        key_code: "0",
        modifiers: ["left_shift"],
    },
});

hyper2.bindKey({
    symbol: `\\`,
    description: "back slash",
    key: "t",
    to: {
        key_code: "7",
        modifiers: ["left_option", "left_shift"],
    },
});

hyper2.bindKey({
    symbol: "/",
    description: "forward slash",
    key: "g",
    to: {
        key_code: "7",
        modifiers: ["left_shift"],
    },
});

hyper1.bindKey({
    symbol: "?",
    description: "question mark",
    key: "i",
    to: {
        key_code: "hyphen",
        modifiers: ["right_shift"],
    },
});

hyper1.bindKey({
    symbol: "$",
    description: "pound",
    key: "u",
    to: {
        key_code: "4",
        modifiers: ["right_option"],
    },
});

hyper1.bindKey({
    description: "4 spaces",
    key: "spacebar",
    to: [
        {
            key_code: "spacebar",
        },
        {
            key_code: "spacebar",
        },
        {
            key_code: "spacebar",
        },
        {
            key_code: "spacebar",
        },
    ],
});

hyper1.bindKey({
    description: "4 backspaces",
    key: "delete_or_backspace",
    to: [
        {
            key_code: "delete_or_backspace",
        },
        {
            key_code: "delete_or_backspace",
        },
        {
            key_code: "delete_or_backspace",
        },
        {
            key_code: "delete_or_backspace",
        },
    ],
});

hyper2.bindKey({
    symbol: "⏮",
    description: "backspace",
    key: "n",
    to: {
        key_code: "delete_or_backspace",
    },
});

hyper2.bindKey({
    symbol: "⏭",
    description: "delete key",
    key: "m",
    to: {
        key_code: "delete_forward",
    },
});

hyper2.bindKey({
    symbol: "{",
    description: "Open curly bracket",
    key: "d",
    to: {
        key_code: "8",
        modifiers: ["left_shift", "left_alt"],
    },
});

hyper2.bindKey({
    symbol: "}",
    description: "Close curly bracket",
    key: "f",
    to: {
        key_code: "9",
        modifiers: ["left_shift", "left_alt"],
    },
});

hyper2.bindKey({
    symbol: "[",
    description: "open square bracket",
    key: "3",
    to: {
        key_code: "8",
        modifiers: ["right_option"],
    },
});

hyper2.bindKey({
    symbol: "]",
    description: "close square bracket",
    key: "4",
    to: {
        key_code: "9",
        modifiers: ["right_option"],
    },
});

hyper2.bindKey({
    symbol: "(",
    description: "open paren",
    key: "e",
    to: {
        key_code: "8",
        modifiers: ["left_shift"],
    },
});

hyper2.bindKey({
    symbol: ")",
    description: "close paren",
    key: "r",
    to: {
        key_code: "9",
        modifiers: ["left_shift"],
    },
});

hyper2.bindKey({
    symbol: "<",
    description: "open angle bracket",
    key: "c",
    to: {
        key_code: "grave_accent_and_tilde",
    },
});

hyper2.bindKey({
    symbol: ">",
    description: "close angle bracket",
    key: "v",
    to: {
        key_code: "grave_accent_and_tilde",
        modifiers: ["left_shift"],
    },
});

hyper2.bindKey({
    symbol: "⬅️",
    description: "left arrow",
    key: "h",
    to: {
        key_code: "left_arrow",
    },
});

hyper2.bindKey({
    symbol: "⬇️",
    description: "down arrow",
    key: "j",
    to: {
        key_code: "down_arrow",
    },
});

hyper2.bindKey({
    symbol: "⬆️",
    description: "up arrow",
    key: "k",
    to: {
        key_code: "up_arrow",
    },
});

hyper2.bindKey({
    symbol: "➡️",
    description: "right arrow",
    key: "l",
    to: {
        key_code: "right_arrow",
    },
});

hyper2.bindKey({
    symbol: "⇠",
    description: "to start of line",
    key: "semicolon",
    to: {
        key_code: "left_arrow",
        modifiers: ["left_gui"],
    },
});

hyper2.bindKey({
    symbol: "⇢",
    description: "to end of the line",
    key: "quote",
    to: {
        key_code: "right_arrow",
        modifiers: ["left_gui"],
    },
});

const SpectaclKeys: Key[] = [
    "1",
    "2",
    "q",
    "w",
    "e",
    "a",
    "s",
    "d",
    "z",
    "x",
    "c",
];

SpectaclKeys.forEach((key) => {
    hyper1.bindKey({
        description: "Spectacle " + key,
        key: key,
        to: {
            key_code: key,
            modifiers: ["left_control", "left_option", "left_command"],
        },
    });
});

const mods = new KarabinerComplexModifications();

mods.addRule({
    description: "Disable confusing backtic button",
    manipulators: [
        {
            type: "basic",
            from: {
                key_code: "equal_sign",
            },
        },
    ],
});

mods.addRule({
    description: "Disable quote button (too close to enter)",
    manipulators: [
        {
            type: "basic",
            from: {
                key_code: "non_us_pound",
            },
        },
    ],
});

mods.addRule({
    description: "Disable insert",
    manipulators: [
        {
            type: "basic",
            from: {
                key_code: "insert",
            },
        },
    ],
});

mods.addRule(hyper1.getRules());
mods.addRule(hyper2.getRules());

// mods.addRule({
//     description: "Map Caps Lock to Escape",
//     manipulators: [
//         {
//             type: "basic",
//             from: {
//                 key_code: "caps_lock",
//             },
//             to: [
//                 {
//                     key_code: "escape",
//                 },
//             ],
//         },
//     ],
// });

if (Deno.env.get("GH_PAGES")) {
    writeHyperKeyImage({
        hyperKeys: [hyper1, hyper2],
        inputSVGPath: "./images/layout.svg",
        ouputHTMLPath: "./build/index.html",
    });
} else {
    mods.writeToProfile("Default profile");
    writeHyperKeyImage({
        hyperKeys: [hyper1, hyper2],
        inputSVGPath: "./images/layout.svg",
        ouputHTMLPath: "./layout.html",
    });
}
