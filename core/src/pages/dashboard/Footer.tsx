import { useAVToggle } from '@100mslive/react-sdk';

function Footer() {
  const { isLocalAudioEnabled, toggleAudio } = useAVToggle();
  return (
    <div className="control-bar">
      <button
        className={
          isLocalAudioEnabled
            ? 'btn btn-accent bg-red-500 hover:bg-red-300'
            : 'btn btn-accent bg-green-500 hover:bg-green-300'
        }
        onClick={toggleAudio}
      >
        {isLocalAudioEnabled ? (
          <svg fill="currentColor" viewBox="0 0 16 16" height="2em" width="2em">
            <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0012 8V7a.5.5 0 011 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 01-2.43.923V15h3a.5.5 0 010 1h-7a.5.5 0 010-1h3v-2.025A5 5 0 013 8V7a.5.5 0 011 0v1a4 4 0 004 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0111 3z" />
            <path d="M9.486 10.607L5 6.12V8a3 3 0 004.486 2.607zm-7.84-9.253l12 12 .708-.708-12-12-.708.708z" />
          </svg>
        ) : (
          <svg fill="currentColor" viewBox="0 0 16 16" height="2em" width="2em">
            <path d="M5 3a3 3 0 016 0v5a3 3 0 01-6 0V3z" />
            <path d="M3.5 6.5A.5.5 0 014 7v1a4 4 0 008 0V7a.5.5 0 011 0v1a5 5 0 01-4.5 4.975V15h3a.5.5 0 010 1h-7a.5.5 0 010-1h3v-2.025A5 5 0 013 8V7a.5.5 0 01.5-.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default Footer;
