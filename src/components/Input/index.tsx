import React from 'react';
import {View, Text, StyleSheet, TextInput, TextInputProps} from 'react-native';
import {FieldInputProps, FormikProps} from 'formik';

interface IProps extends TextInputProps {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
}

class Input extends React.PureComponent<IProps> {
  state: any;
  constructor(props: IProps) {
    super(props);
    const {field} = props;
    this.state = {
      value: field.value,
    };
  }
  componentDidMount() {}

  onChangeText = (value: string) => {
    const {form, field, onChangeText} = this.props;
    form.handleChange(field.name)(value);
    this.setState({value});
    if (onChangeText) {
      onChangeText(value);
    }
  };

  render() {
    const {form, field, ...rest} = this.props;
    const {value} = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          {...rest}
          defaultValue={value}
          onChangeText={form.handleChange(field.name)}
          onBlur={form.handleBlur(field.name)}
        />
        <View>
          <Text style={styles.error}>{form.errors[field.name]}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  error: {
    position: 'absolute',
    color: 'red',
    marginTop: 5,
    marginLeft: 10,
    fontSize: 12,
  },
});

export default Input;
