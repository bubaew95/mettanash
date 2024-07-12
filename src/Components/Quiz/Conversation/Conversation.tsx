import Button from "../Button";

interface ConversationProps {
  items: string[];
}

const Conversation: React.FC<ConversationProps> = ({ items }) => {
  return (
    <div className="buttons mt-6 grid-container grid grid-cols-5 gap-4">
      {items &&
        items.map((item) => (
          <Button
            key={item}
            text={item}
            style="bg-orange-400 hover:bg-orange-500"
          />
        ))}
    </div>
  );
};

export default Conversation;
