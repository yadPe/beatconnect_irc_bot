import ConfLoader from './ConfLoader'

export default (settings = ConfLoader.conf, { type, payload }) => {
  let { userPreferences } = settings;
  switch (type) {
    case 'VOLUME':
      userPreferences = { ...userPreferences, volume: payload }
      return { ...settings, userPreferences: {...userPreferences} }
    case 'IRC_USER':
      userPreferences = { ...userPreferences, irc: { ...userPreferences.irc, username: payload } }
      return { ...settings, userPreferences: {...userPreferences} }
    case 'IRC_PASS':
      userPreferences = { ...userPreferences, irc: { ...userPreferences.irc, password: payload } }
      return { ...settings, userPreferences: {...userPreferences} }
    case 'IRC_IS_BOT':
      userPreferences = { ...userPreferences, irc: { ...userPreferences.irc, isBotAccount: payload } }
      return { ...settings, userPreferences: {...userPreferences} }
    case 'OSU_API_KEY':
      userPreferences = { ...userPreferences, osuApi: { key: payload } }
      return { ...settings, userPreferences: {...userPreferences} }
    case 'PREFIX':
      userPreferences = { ...userPreferences, prefix: payload }
      return { ...settings, userPreferences: {...userPreferences} }
    case 'AUTOBEAT':
      userPreferences = { ...userPreferences, autoBeat: payload }
      return { ...settings, userPreferences: {...userPreferences} }
    default:
      return settings;
  }
}