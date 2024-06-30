import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `Atreyu Kelly | Personal Portfolio - ${pageTitle}`;
	}, [pageTitle]);
};
