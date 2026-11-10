export function fileIcon(mime = '', name = '') {
  const m = (mime || '').toLowerCase();
  const n = (name || '').toLowerCase();
  if (m.startsWith('image/')) return 'image';
  if (m.startsWith('video/')) return 'movie';
  if (m.startsWith('audio/')) return 'music_note';
  if (m.includes('pdf') || n.endsWith('.pdf')) return 'picture_as_pdf';
  if (m.includes('zip') || m.includes('rar') || m.includes('tar') || n.match(/\.(zip|rar|7z|tar|gz)$/))
    return 'folder_zip';
  if (m.includes('json') || n.endsWith('.json')) return 'data_object';
  if (m.includes('javascript') || n.endsWith('.js')) return 'code';
  if (m.includes('html') || n.endsWith('.html')) return 'language';
  if (m.includes('css') || n.endsWith('.css')) return 'palette';
  if (n.match(/\.(doc|docx)$/)) return 'description';
  if (n.match(/\.(xls|xlsx|csv)$/)) return 'table_chart';
  if (n.match(/\.(ppt|pptx)$/)) return 'slideshow';
  if (n.match(/\.(txt|md)$/)) return 'article';
  return 'draft';
}

// Backwards-compatible alias for older imports.
export const fileEmoji = fileIcon;

export function fileType(mime = '') {
  const m = (mime || '').toLowerCase();
  if (m.startsWith('image/')) return 'image';
  if (m.startsWith('video/')) return 'video';
  if (m.startsWith('audio/')) return 'audio';
  if (m.includes('pdf')) return 'pdf';
  return 'doc';
}
