import type { Actions } from '@sveltejs/kit';
import { sendEmail } from './sendEmail';

const products = ['honey', 'lip balm', 'face scrub', 'bee removal'] as const;
type Product = typeof products[number];

export const createSendEmailActions = (product: Product): Actions => {
	return {
		default: async ({ request }) => {
			const data = await request.formData();
			await sendEmail({
				customerEmailAddress: data.get('customerEmailAddress') as string,
				product: product
			});
			return { success: true };
		}
	};
};
