export const APP_NAME = 'TeleCloud';
export const APP_TAGLINE = 'AI-powered cloud storage on Telegram';

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export const FILE_FILTERS = [
  { key: 'all', label: 'All', icon: 'folder_open' },
  { key: 'images', label: 'Images', icon: 'image' },
  { key: 'videos', label: 'Videos', icon: 'movie' },
  { key: 'audio', label: 'Audio', icon: 'music_note' },
  { key: 'docs', label: 'Docs', icon: 'description' },
  { key: 'starred', label: 'Starred', icon: 'star' },
];

// Giga accent palette — shared with the marketing tokens
export const FOLDER_COLORS = [
  '#2195FF', // accent-blue
  '#6640FF', // accent-violet
  '#FF9AEA', // accent-rose
  '#E89EEE', // accent-pink
  '#F76B15', // accent-orange
  '#C3EACA', // accent-green
  '#C1B2FF', // panel-lilac
  '#969696', // muted-ink
];

export const ACTION_ICONS = {
  register: 'celebration',
  login: 'key',
  upload: 'upload',
  delete: 'delete',
  share_create: 'link',
  share_delete: 'block',
  folder_create: 'create_new_folder',
  folder_delete: 'folder_delete',
  ai_chat: 'smart_toy',
  detect_chat: 'sensors',
  profile_update: 'person',
  admin_bot_token: 'build',
};

export const EXPIRY_OPTIONS = [
  { value: '', label: 'Never' },
  { value: '1d', label: '1 day' },
  { value: '7d', label: '7 days' },
  { value: '30d', label: '30 days' },
];
