/* eslint-disable max-len */
import {component$} from '@builder.io/qwik';

export default component$(() => {
	return (
		<footer class="flex w-full max-w-desktop flex-col items-center justify-center gap-4 px-8 py-12 md:flex-row md:justify-between">
			<span class="text-center text-base md:text-left">
				Copyright © {new Date().getFullYear()} <span class="text-secondary">Feldrise</span> - Made with{' '}
				<a class="text-secondary" href="https://qwik.builder.io/" target="_blank" rel="norefferer">
					Qwik
				</a>
				-<a href="/mentions-legales">Mentions légales</a>
			</span>
			<div class="flex gap-4">
				<a href="https://app.gather.town/app/0raFgE4sC0iW2rE4/Feldrise" target="_blank" rel="noreferrer">
					{/* eslint-disable-next-line max-len */}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
							<path d="M22 5V2l-5.89 5.89" />
							<circle cx="16.6" cy="15.89" r="3" />
							<circle cx="8.11" cy="7.4" r="3" />
							<circle cx="12.35" cy="11.65" r="3" />
							<circle cx="13.91" cy="5.85" r="3" />
							<circle cx="18.15" cy="10.09" r="3" />
							<circle cx="6.56" cy="13.2" r="3" />
							<circle cx="10.8" cy="17.44" r="3" />
							<circle cx="5" cy="19" r="3" />
						</g>
					</svg>
				</a>
				<a href="https://fr.linkedin.com/in/feldrise" target="_blank" rel="noreferrer">
					{/* eslint-disable-next-line max-len */}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
							<circle cx="4" cy="4" r="2" />
						</g>
					</svg>
				</a>
				<a href="https://fr-fr.facebook.com/feldrisepage" target="_blank" rel="noreferrer">
					{/* eslint-disable-next-line max-len */}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
						/>
					</svg>
				</a>
				<a href="https://twitter.com/feldrise" target="_blank" rel="noreferrer">
					{/* eslint-disable-next-line max-len */}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2z"
						/>
					</svg>
				</a>
				<a href={`https://github.com/Feldrise`} target="_blank" rel="noreferrer">
					{/* eslint-disable-next-line max-len */}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
							<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65c-.17.6-.22 1.23-.15 1.85v4" />
							<path d="M9 18c-4.51 2-5-2-7-2" />
						</g>
					</svg>
				</a>
				<a href={`mailto:contact@feldrise.com?subject=Demande de contact depuis le site`} target="_blank" rel="noreferrer">
					{/* eslint-disable-next-line max-len */}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
							<rect width="20" height="16" x="2" y="4" rx="2" />
							<path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
						</g>
					</svg>
				</a>
			</div>
		</footer>
	);
});
