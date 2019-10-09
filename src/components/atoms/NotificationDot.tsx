import React from 'react'
import CircularProgress from "@material-ui/core/CircularProgress";

import { getActiveClasses } from "../../utility/active-classes";
import { any } from 'prop-types';

interface Props {
    shouldHide: boolean
    isLoading?: boolean;
    style?: any;
}

export const NotificationDot = ({style, shouldHide, isLoading}: Props) => {
    return (
        <span style={style} className="relative">
            <span
                className={getActiveClasses({
                    "text-white absolute bg-orange-400 rounded-full w-3 h-3": true,
                    "hidden": shouldHide,
                })}
            ></span>
            {isLoading && <CircularProgress
                size={16}
                color="inherit"
                thickness={10}
                className="absolute w-4 h-4 text-orange-400"
                style={{ top: "-3px", right: "-14px" }}
            />}
        </span>
    )
}