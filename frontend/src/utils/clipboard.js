export const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        // You could trigger a toast here
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
};
