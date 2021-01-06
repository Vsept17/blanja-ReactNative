import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Switch} from 'react-native';
import {Text} from '../../../components';
import {colors} from '../../../utils';
import OutlineInput from 'react-native-outline-input';

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [fullname, setFullname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const toggleSwitch = () => setIsEnabled((prevState) => !prevState);
  const toggleSwitch1 = () => setIsEnabled1((prevState) => !prevState);
  const toggleSwitch2 = () => setIsEnabled2((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <Text children="Settings" size="xl3" />
      <Text
        children="Personal information"
        size="xl"
        style={{marginBottom: 15}}
      />
      <View>
        <View style={styles.formInput}>
          <OutlineInput
            value={fullname}
            onChangeText={(e) => setFullname(e)}
            label="Full name"
            activeValueColor={colors.black}
            activeBorderColor={colors.green}
            activeLabelColor={colors.green}
            passiveBorderColor={colors.white}
            passiveLabelColor={colors.black}
            passiveValueColor={colors.black}
            style={styles.formInput}
          />
        </View>
        <View style={styles.formInput}>
          <OutlineInput
            value={dateOfBirth}
            onChangeText={(e) => setDateOfBirth(e)}
            label="Date of birth"
            activeValueColor={colors.black}
            activeBorderColor={colors.green}
            activeLabelColor={colors.green}
            passiveBorderColor={colors.white}
            passiveLabelColor={colors.black}
            passiveValueColor={colors.black}
          />
        </View>
      </View>
      <TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            children="Password"
            size="xl"
            style={{fontWeight: '500'}}
            style={styles.notifications}
          />
          <Text
            children="Change"
            size="xl"
            color="gray"
            style={styles.notifications}
          />
        </View>
        <View
          style={{
            padding: 10,
            marginBottom: 35,
            backgroundColor: 'white',
            borderRadius: 5,
          }}>
          <Text children="Password" color="gray" />
          <Text children="****************" secureTextEntry />
        </View>
      </TouchableOpacity>
      <View>
        <Text children="Notifications" size="xl" style={{fontWeight: '700'}} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text children="Sales" size="l" style={styles.notifications} />
          <Switch
            trackColor={{false: '#767577', true: '#9B9B9B'}}
            thumbColor={isEnabled ? '#2AA952' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text children="New arivals" size="l" style={styles.notifications} />
          <Switch
            trackColor={{false: '#767577', true: '#9B9B9B'}}
            thumbColor={isEnabled1 ? '#2AA952' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch1}
            value={isEnabled1}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            children="Delivery status changes"
            size="l"
            style={styles.notifications}
          />
          <Switch
            trackColor={{false: '#767577', true: '#9B9B9B'}}
            thumbColor={isEnabled2 ? '#2AA952' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#E5E5E5',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  formInput: {
    marginBottom: 15,
    // borderWidth: 10,
    borderRadius: 20,
  },
  notifications: {
    marginVertical: 10,
  },
});

export default Settings;
