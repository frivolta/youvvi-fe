import React from 'react';
import { FieldError } from 'react-hook-form';

interface IInput {
  small?: boolean;
  placeholder: string;
  type: string;
  name: string;
  value?: string;
  register?: any;
  hasErrors?: FieldError | boolean | undefined;
  errorMessage?: string | undefined;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  blur?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
}

export const Input: React.FC<IInput> = props => {
  return (
    <div className={`Input ${props.small && `Input--small`}`}>
      <input
        name={props.name}
        ref={props.register}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        onBlur={props.blur}
        className={`Input__field ${props.small && `Input__field--small`} ${props.hasErrors &&
          `Input__field--hasErrors`}`}
        placeholder={props.placeholder}
        disabled={props.disabled ? props.disabled : false}
        data-testid="Input"
      />
      {props.hasErrors &&
        <span className="Input__field--hasErrors__message" data-testid="Input-error">
          {props.errorMessage}
        </span>}
    </div>
  );
};
