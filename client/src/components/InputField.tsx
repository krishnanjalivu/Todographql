import React, { useRef } from "react";
import "./styles.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your task "
          className="input__box"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button className="input_submit" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default InputField;
