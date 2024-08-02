export function wait (): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 0);
    });

}