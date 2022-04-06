function ErrorFallback({error, resetErrorBoundary}){
    return(
        <div role="alert">
            <p>Something Went Wrong</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try Again</button>

        </div>
    );
}
export default ErrorFallback;