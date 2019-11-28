<template>
<div>
   <h3 class="add-resolution-title">Make New Resolution</h3>
    <div class="add-resolution">
      <form @submit="addResolution" class="new-resolution">
        <input class="form-input" type="text" placeholder="Goal" name="goal" />
        <textarea class="form-input" placeholder="What's your motivation?" name="motivation"></textarea>
        <input class="form-input" type="text" placeholder="Add a photo" name="image"/>
        <input class="form-input" type="text" placeholder="realm_id" name="realm_id"/>
        <input class="form-input" type="text" placeholder="user_id" name="user_id"/>
        <input type="submit" class="add-resolution-button" value="Add Resolution"/>
      </form>
      </div>
      </div>
</template>

<script>
export default {
  props: {addResolution: {}}
}
</script>

<style scoped lang="scss">
*{
  box-sizing: border-box;
}
form{
  width: 400px;
  
  
  input{ 
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 1rem;
    font-size: 15px;
    border-radius: 5px;
    border: 1px #474787 solid;

  }
  textarea{
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 1rem;
    font-size: 15px;
    border-radius: 5px;
    border: 1px #474787 solid;
  }
  .add-resolution-button{
    background-color:  #474787;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 15px;
  }
  .add-resolution-button:hover{
    background-color: white;
    color:#474787;
    border: 3px #474787 solid;
    padding: 0.9rem;
  
  }
}

.add-resolution{
  display: flex;
  justify-content: center;
}


</style>