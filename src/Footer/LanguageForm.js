import React from "react";
import { Form, Select, SelectButton, Option } from "./styled";

const LanguageForm = Form.extend``;

export default () => {
  return (
    <LanguageForm>
      <SelectButton>English</SelectButton>
      <Select name="language">
        <Option value="English">English</Option>
      </Select>
    </LanguageForm>
  );
};
