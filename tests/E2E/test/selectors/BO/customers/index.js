module.exports = Object.assign(
  {
    BO: {
      success_panel: '#content > div.bootstrap > div[class*=success]',
      alert_panel: '//*[@id="content"]/div[@class="bootstrap"]/div[contains(@class, "alert-danger")]'
    }
  },
  require('./addresses'),
  require('./customer')
);
