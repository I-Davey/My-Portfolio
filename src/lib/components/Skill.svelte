<script>
    import { CheckCircled } from "radix-icons-svelte";

    export let skill;
</script>

<div key={skill} class="p-2 sm:w-1/2 w-full">
    <div class="bg-gray-800 rounded flex p-4 h-full items-center">
        <CheckCircled class="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
        <span class="title-font font-medium text-white">
            {skill}
        </span>
    </div>
</div>
