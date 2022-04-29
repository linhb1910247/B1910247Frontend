<script>
export default {
	props: {
		modelValue: { type: String, default: "" },
	},
	emits: ["submit", "update:modelValue"],
	methods: {
		updateModelValue(e) {
			this.$emit("update:modelValue", e.target.value);
		},
		submit() {
			this.$emit("submit");
		},
	},
};
</script>

<template>
<div class="input-group m-3  search3" >
            <div class="form-outline  d-flex">
              <input id="search-input" type="search" class="form-control" 
			 		 	:value="modelValue"
					@input="updateModelValue"
						@keyup.enter="submit"
			  />
                     <label class="form-label" for="form1"></label>
                </div>
                    <button id="search-button" type="button" class="btn btn-primary"
					@click="submit">
					
                  <i class="fas fa-search"></i>
                    </button>
        </div>
	
</template>
