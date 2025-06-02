import ModalVideo from "react-modal-video";

export default function ModalVideoComponent({ isOpen, setIsOpen, videoId }) {
  return (
    <ModalVideo
      channel="youtube"
      isOpen={isOpen}
      videoId="D0UnqGm_miA"
      onClose={() => setIsOpen(false)}
    />
  );
}
