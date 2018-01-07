import React from "react";
import { Form, Select, SelectButton, Option } from "./styled";

const CurrencyForm = Form.extend``;

export default () => {
  return (
    <CurrencyForm>
      <SelectButton>United States dollar</SelectButton>
      <Select name="currency">
        <Option value="United States dollar">United States dollar</Option>
      </Select>
    </CurrencyForm>
  );
};
