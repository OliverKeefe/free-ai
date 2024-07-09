import transformers
import torch
from typing import List, Dict, Optional


class Llama():
    def __init__(self,
                 model_variant: str = "meta-llama/Meta-Llama-3-70B-Instruct",
                 messages: List[Dict[str]] = None,
                 pipeline: Optional[object] = None,
                 outputs: Optional[object] = None) -> None:
        self.model_variant = model_variant
        self.messages = messages if messages is not None else []
        self.pipeline = pipeline
        self._terminators = (
            [pipeline.tokenizer.eos_token_id,
                pipeline.tokenizer.convert_tokens_to_ids("<|eot_id|>")]
            if pipeline else []
        )
        self.outputs = outputs

    # Getters / Setters
    @property
    def model_variant(self) -> str:
        return self._model_variant

    @model_variant.setter
    def model_variant(self, model_selection: str) -> None:
        self._model_variant = model_selection

    @property
    def messages(self) -> object:
        return self._messages

    @messages.setter
    def messages(self, new_messages: List[Dict[str]]) -> None:
        self._messages = new_messages

    @property
    def terminators(self) -> List[object]:
        return self._terminators

    @terminators.setter
    def terminators(self, new_terminators: List[object]) -> None:
        self._terminators = new_terminators

    @property
    def outputs(self) -> Optional[object]:
        return self._outputs

    @outputs.setter
    def outputs(self, new_outputs) -> None:
        self._outputs = new_outputs

    def pipeline_create(self) -> Optional[object]:
        return transformers.pipeline(
            "text-generation",
            model=self.model_variant,
            model_kwargs={"torch_dtype": torch.bfloat16},
            device_map="auto",
        )

    def outputs(self) -> None:
        transformers.pipeline(
            self.messages,
            max_new_tokens=256,
            eos_token_id=terminators,
            do_sample=True,
            temperature=0.6,
            top_p=0.9,
        )

    print(outputs[0]["generated_text"][-1])
