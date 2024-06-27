import { Form } from "react-bootstrap";

export default function TextField({ label, hint, ...props }) {
  return (
    <div className="input-field">
      <label htmlFor={props.id}>
        {label} {hint && <span className="hint">{hint}</span>}
      </label>
      <Form.Text className="form-control" {...props} />
    </div>
  );
}
