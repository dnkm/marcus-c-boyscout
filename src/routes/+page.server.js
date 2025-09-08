/** Redirect root to /news as default homepage */
import { redirect } from '@sveltejs/kit';

export function load() {
  throw redirect(307, '/news');
}
