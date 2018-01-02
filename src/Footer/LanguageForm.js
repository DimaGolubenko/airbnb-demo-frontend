import React from "react";
import { Form, Select, FakeSelect, Option } from "./styled";

const LanguageForm = Form.extend``;

export default () => {
  return (
    <LanguageForm>
      <FakeSelect>English</FakeSelect>
      <Select name="language">
        <Option value="English" selected>
          English
        </Option>
      </Select>
    </LanguageForm>
  );
};
