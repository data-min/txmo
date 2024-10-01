// src/pages/SettingsPage.js
import React, { useState, useEffect } from 'react';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    fontSize: 'medium',
  });

  useEffect(() => {
    // TODO: Fetch user settings from the server
    // This is where you'd make an API call to get the user's settings
  }, []);

  const handleSettingChange = (setting, value) => {
    setSettings({ ...settings, [setting]: value });
    // TODO: Save settings to the server
    console.log('Saving setting:', setting, value);
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <div className="setting">
        <label htmlFor="darkMode">Dark Mode</label>
        <input
          type="checkbox"
          id="darkMode"
          checked={settings.darkMode}
          onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
        />
      </div>
      <div className="setting">
        <label htmlFor="notifications">Notifications</label>
        <input
          type="checkbox"
          id="notifications"
          checked={settings.notifications}
          onChange={(e) => handleSettingChange('notifications', e.target.checked)}
        />
      </div>
      <div className="setting">
        <label htmlFor="fontSize">Font Size</label>
        <select
          id="fontSize"
          value={settings.fontSize}
          onChange={(e) => handleSettingChange('fontSize', e.target.value)}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
    </div>
  );
};

export default SettingsPage;