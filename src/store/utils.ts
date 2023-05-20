/* prevent falsy type conversion */
/* eslint-disable no-extra-boolean-cast */

type Options = {
    [x: string]: string | number;
};

export const removeEmptyFields = (options: Options) => {
    const params: Options = {};
    Object.keys(options).forEach((opt) => {
        if (!!options[opt]) {
            params[opt] = options[opt];
        }
    });
    return params;
};
