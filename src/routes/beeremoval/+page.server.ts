import { createSendEmailActions } from '$lib/server/createSendEmailAction';

export const prerender = false;

export const actions = createSendEmailActions('bee removal');
