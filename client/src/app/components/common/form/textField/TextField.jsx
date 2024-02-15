import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { ReactComponent as LogoEyeSlash } from "../../../../assets/svg/form/eyeslash.svg";
import { ReactComponent as LogoEye } from "../../../../assets/svg/form/eye.svg";
import {
  toggleIconColor,
  toggleIconHeightSize,
  toggleIconWidthSize,
} from "../../../../utils/disabled";
import { observer } from "mobx-react-lite";
const TextField = observer(
  ({
    label,
    type,
    name,
    /*    value, */
    /*    onChange, */
    error,
    placeholder,
    className,
    inputClassName,
    onKeyDown,
  }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [click, setClick] = useState(false);

    /*    const handleChange = ({ target }) => {
      onChange({ name: target.name, value: target.value });
    }; */

    const inputClasses = classNames("", inputClassName);
    const getInputClasses = () => {
      return inputClasses + (error ? " is-invalid" : "");
    };
    const toggleShowPassword = () => {
      setShowPassword((prevState) => !prevState);
    };
    const classes = classNames("textfield", className);
    const rootEl = useRef(null);

    useEffect(() => {
      const onClick = (e) =>
        rootEl.current.contains(e.target) || setClick(false);
      document.addEventListener("click", onClick);
      return () => document.removeEventListener("click", onClick);
    }, []);
    return (
      <>
        <div className={classes}>
          {label ? <label htmlFor={name}>{label}</label> : null}
          <div>
            <div>
              <input
                ref={rootEl}
                type={showPassword ? "text" : type}
                onClick={() => setClick(!click)}
                id={name}
                placeholder={click ? "" : placeholder}
                name={name}
                /*   value={value} */
                /*                 onChange={onChange && handleChange} */
                onKeyDown={onKeyDown}
                className={
                  type !== "password"
                    ? getInputClasses()
                    : `${getInputClasses()} input_right-border`
                }
              />
              {type === "password" && (
                <div>
                  <button type="button" onClick={toggleShowPassword}>
                    {showPassword ? (
                      <LogoEyeSlash
                        className="logo__eye"
                        width={toggleIconWidthSize(
                          "25px",
                          "27px",
                          "27px",
                          "30px"
                        )}
                        height={toggleIconHeightSize(
                          "25px",
                          "27px",
                          "27px",
                          "30px"
                        )}
                        stroke={toggleIconColor("#325572")}
                      />
                    ) : (
                      <LogoEye
                        className="logo__eye"
                        width={toggleIconWidthSize(
                          "25px",
                          "27px",
                          "27px",
                          "30px"
                        )}
                        height={toggleIconHeightSize(
                          "25px",
                          "27px",
                          "27px",
                          "30px"
                        )}
                        stroke={toggleIconColor("#325572")}
                      />
                    )}
                  </button>
                </div>
              )}
            </div>
            {error && <div>{error}</div>}
          </div>
        </div>
      </>
    );
  }
);

TextField.defaultProps = {
  type: "text",
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  error: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default TextField;
