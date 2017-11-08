

const SUBSCRIBE_TOPIC = "SUBSCRIBE_TOPIC"
const UNSUB_TOPIC = "UNSUB_TOPIC"

export const subscribeTopic = (data) => ({
  type: SUBSCRIBE_TOPIC,
  data,
})

export const unsubTopic = (data) => ({
  type: UNSUB_TOPIC,
  data,
})

const subReducer = (state = [], { type, data }) => {
  switch (type) {
    case SUBSCRIBE_TOPIC: {
      return [...state, data];
    }
    case UNSUB_TOPIC: {
      const copyState = state.slice();
      copyState.forEach((topic, i) => {
        if (topic.id === data.id) {
          copyState.splice(i, 1)
        }
      })
      return copyState
    }
    default:
      return state;
  };
};

export default subReducer
