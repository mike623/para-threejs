App.info({
  // ios --com.39columns.mobile
  // andorid  -- com.app39c
  id: 'com.pant',
  // id:"com.app39c",
  name: '三十九asda篇',
  version:"0.0.15"
});

// App.setPreference('Orientation', 'portrait');
// App.setPreference('ios-orientation-iphone', 'portrait');
// App.setPreference('StatusBarOverlaysWebView', true);
// App.setPreference('StatusBarStyle', 'lightcontent');
// App.setPreference('StatusBarBackgroundColor', '#F0F0F0');
App.setPreference("AndroidLaunchMode", "singleTask");
App.accessRule("*");
