import {$, component$} from '@builder.io/qwik';
import {routeLoader$, type DocumentHead} from '@builder.io/qwik-city';
import type {InitialValues, SubmitHandler} from '@modular-forms/qwik';
import {formAction$, useForm, valiForm$} from '@modular-forms/qwik';
import type {Input} from 'valibot';
import {object, string, minLength, email, boolean} from 'valibot';
import Button from '~/components/button';
import Description from '~/components/cto-meeting/description';
import Header from '~/components/cto-meeting/header';
import {PrismaClient} from '@prisma/client';

const AppointementSchema = object({
	name: string([minLength(1, 'Veuillez entrer votre nom et prénom.')]),
	project: string(),
	description: string([minLength(1, 'Veuillez entrer une description de votre projet.')]),
	appointment: boolean(),
	email: string([minLength(1, 'Veuillez entrer votre adresse e-mail.'), email("Votre e-mail n'est pas au bon format.")]),
});

type AppointementForm = Input<typeof AppointementSchema>;

const getInitFormValues = (): InitialValues<AppointementForm> => ({
	name: '',
	description: '',
	email: '',
	appointment: false,
	project: '',
});

// Note: State is kept in local variable for demo purposes
const appointementFormValues: InitialValues<AppointementForm> = getInitFormValues();

export const useFormLoader = routeLoader$<InitialValues<AppointementForm>>(() => appointementFormValues);

export const useFormAction = formAction$<AppointementForm>(async values => {
	const prisma = new PrismaClient();
	await prisma.appointment.create({
		data: {
			project: values.project,
			appointment: values.appointment ? 1 : 0,
			description: values.description,
			email: values.email,
		},
	});
}, valiForm$(AppointementSchema));

export default component$(() => {
	const [, {Form, Field}] = useForm<AppointementForm>({
		loader: useFormLoader(),
		action: useFormAction(),
		validate: valiForm$(AppointementSchema),
	});

	const handleSubmit = $<SubmitHandler<AppointementForm>>(values => {
		console.log(values);

		if (values.appointment) {
			window.open('https://calendly.com/feldrise-edo/15?primary_color=aa33ff&month=2023-11');
		}
	});

	return (
		<main class="flex w-full flex-col items-center justify-center">
			<Header />
			<Description />
			<Form onSubmit$={handleSubmit} class="mb-4 w-full max-w-desktop px-8 pb-8 pt-6">
				<Field name="name">
					{(field, props) => (
						<div class="mb-4">
							<label class="mb-2 block font-bold text-white">Votre nom et prénom :</label>
							<input
								{...props}
								type="string"
								value={field.value}
								class="focus:shadow-outline w-full appearance-none rounded
							border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
							/>
							{field.error && <div class="mb-2 block text-sm font-bold text-red-600">{field.error}</div>}
						</div>
					)}
				</Field>
				<Field name="project">
					{(field, props) => (
						<div class="mb-4 w-full">
							<label class="mb-2 block font-bold text-white">Nom de votre projet :</label>
							<input
								{...props}
								type="string"
								value={field.value}
								class="focus:shadow-outline w-full appearance-none rounded
							border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
							/>
							{field.error && <div class="mb-2 block text-sm font-bold text-red-600">{field.error}</div>}
						</div>
					)}
				</Field>
				<Field name="description">
					{(field, props) => (
						<div class="mb-4">
							<label class="mb-2 block font-bold text-white">Description de votre projet :</label>
							<textarea
								{...props}
								value={field.value}
								rows={4}
								class="focus:shadow-outline w-full appearance-none rounded
							border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
							/>
							{field.error && <div class="mb-2 block text-sm font-bold text-red-600">{field.error}</div>}
						</div>
					)}
				</Field>
				<Field name="email">
					{(field, props) => (
						<div class="mb-4">
							<label class="mb-2 block text-sm font-bold text-white">Votre adresse e-mail :</label>
							<input
								{...props}
								type="email"
								value={field.value}
								class="focus:shadow-outline w-full appearance-none rounded
								border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
							/>
							{field.error && <div class="mb-2 block text-sm font-bold text-red-600">{field.error}</div>}
						</div>
					)}
				</Field>
				<Field name="appointment" type="boolean">
					{(field, props) => (
						<div class="mb-4 mt-4 flex items-start">
							<div class="rounded-md bg-secondary p-4 text-white">
								<label>
									<input
										class="
										mr-2 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500
									"
										{...props}
										type="checkbox"
										checked={field.value}
									/>
									Je souhaite aller à l'étape du rendez-vous (CTO Meeting) pendant le salon
								</label>
							</div>
						</div>
					)}
				</Field>
				<div class="mt-4 flex w-full justify-end">
					<Button type="submit">Envoyer le formulaire</Button>
				</div>
			</Form>
		</main>
	);
});

export const head: DocumentHead = {
	title: 'Feldrise - CTO Meeting',
	meta: [
		{
			name: 'description',
			content: 'Prendre rendez-vous pour "Entreprendre dans l\'Ouest"',
		},
		{
			name: 'og:title',
			content: 'Feldrise - La solution CTO en Bretagne',
		},
		{
			name: 'og:description',
			content: 'Prendre rendez-vous pour "Entreprendre dans l\'Ouest"',
		},
		{
			name: 'og:url',
			content: 'https://feldrise.com/cto-meeting',
		},
		{
			name: 'og:image',
			content: 'https://feldrise.com/logo-feldrise/icon-white-logo.png',
		},
	],
};
