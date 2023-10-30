import {$, component$} from '@builder.io/qwik';
import {routeLoader$, type DocumentHead} from '@builder.io/qwik-city';
import {InitialValues, SubmitHandler, formAction$, useForm, valiForm$} from '@modular-forms/qwik';
import {object, string, minLength, email, Input} from 'valibot';
import Description from '~/components/cto-dating/description';
import Header from '~/components/cto-dating/header';

const AppointementSchema = object({
	name: string([minLength(1, 'Veuillez entrer votre nom et prénom.')]),
	projectName: string(),
	description: string([minLength(1, 'Veuillez entrer une description de votre projet.')]),
	email: string([minLength(1, 'Veuillez entrer votre adresse e-mail.'), email("Votre e-mail n'est pas au bon format.")]),
});

type AppointementForm = Input<typeof AppointementSchema>;

const getInitFormValues = (): InitialValues<AppointementForm> => ({
	name: '',
	description: '',
	email: '',
	projectName: '',
});

// Note: State is kept in local variable for demo purposes
let appointementFormValues: InitialValues<AppointementForm> = getInitFormValues();

export const useFormLoader = routeLoader$<InitialValues<AppointementForm>>(() => appointementFormValues);

export const useFormAction = formAction$<AppointementForm>(values => {
	// Runs on server
}, valiForm$(AppointementSchema));

export default component$(() => {
	const [projectForm, {Form, Field}] = useForm<AppointementForm>({
		loader: useFormLoader(),
		action: useFormAction(),
		validate: valiForm$(AppointementSchema),
	});

	const handleSubmit: SubmitHandler<AppointementForm> = $((values, event) => {
		// Runs on client
		window.open('https://calendly.com/feldrise-edo/15?primary_color=aa33ff&month=2023-11');
	});
	return (
		<main class="flex w-full flex-col items-center justify-center">
			<Header></Header>
			<Description></Description>
			<Form onSubmit$={handleSubmit} class="mb-4 w-full px-8 pb-8 pt-6 lg:w-3/4">
				<Field name="name">
					{(field, props) => (
						<div class="mb-4">
							<label class="mb-2 block text-sm font-bold text-white">Votre nom et prénom :</label>
							<input
								{...props}
								type="string"
								value={field.value}
								class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
							/>
							{field.error && <div class="mb-2 block text-sm font-bold text-red-600">{field.error}</div>}
						</div>
					)}
				</Field>
				<Field name="projectName">
					{(field, props) => (
						<div class="mb-4 w-full">
							<label class="mb-2 block text-sm font-bold text-white">Nom de votre projet :</label>
							<input
								{...props}
								type="string"
								value={field.value}
								class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
							/>
							{field.error && <div class="mb-2 block text-sm font-bold text-red-600">{field.error}</div>}
						</div>
					)}
				</Field>
				<Field name="description">
					{(field, props) => (
						<div class="mb-4">
							<label class="mb-2 block text-sm font-bold text-white">Description de votre projet :</label>
							<textarea
								{...props}
								value={field.value}
								class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
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
								class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
							/>
							{field.error && <div class="mb-2 block text-sm font-bold text-red-600">{field.error}</div>}
						</div>
					)}
				</Field>
				<div class="flex w-full flex-col content-between gap-4 lg:flex-row">
					<button class="rounded-md bg-primary px-8  py-2 text-center text-lg duration-300 hover:bg-primary-dark lg:w-1/2" type="submit">
						Demandez à être recontacté
					</button>
					<button class="rounded-md bg-primary px-8  py-2 text-center text-lg duration-300 hover:bg-primary-dark lg:w-1/2" type="submit">
						Prendre rendez-vous lors de "Entreprendre dans l'Ouest"
					</button>
				</div>
			</Form>
		</main>
	);
});

export const head: DocumentHead = {
	title: 'Feldrise Blog',
	meta: [
		{
			name: 'description',
			content: 'Prendre rendez-vous pour "Entreprendre dans l\'ouest"',
		},
		{
			name: 'og:title',
			content: 'Feldrise - La solution CTO en Bretagne',
		},
		{
			name: 'og:description',
			content: 'Prendre rendez-vous pour "Entreprendre dans l\'ouest"',
		},
		{
			name: 'og:url',
			content: 'https://feldrise.com/blog',
		},
		{
			name: 'og:image',
			content: 'https://feldrise.com/logo-feldrise/icon-white-logo.png',
		},
	],
};
