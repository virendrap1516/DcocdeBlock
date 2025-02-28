function VideoSection({ videoUrl, title }) {
    return (
        <div className="flex flex-col items-center justify-center text-white hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
            <iframe
                className="mt-6 w-full full-w-5xl aspect-video mx-40 rounded-lg shadow-lg p-5"
                src={videoUrl}
                title={title}
                allowFullScreen
                loading="lazy"
                aria-label={title}>
                </iframe>
        </div>
    );
}

export default VideoSection;
