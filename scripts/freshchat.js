function url() {
	return 'http://localhost:3000';
}

// action where we want to detect memory leaks: click the Hotels button
async function action(page) {
	await page.click('a[href="/"]');
}

// action where we want to go back to the step before: click clear search
async function back(page) {
	await page.click('a[href="/pages/2"]');
}

const repeat = () => 5

module.exports = {action, back, url, repeat};
