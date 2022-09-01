<template>
    <div>
        <div>
            Button示例
        </div>
        <h2>示例1</h2>
        <div>
            <Button theme="button" >halo</Button>
            <Button theme="link" >halo</Button>
            <Button theme="text" >halo</Button>
        </div>


        <h2>示例2</h2>
        <div>
            <div>
            <Button size="big">大大大</Button>
            <Button>普普通</Button>
            <Button size="small">小小小</Button>
            </div>
            <div>
            <Button theme="link" size="big">大大大</Button>
            <Button theme="link">普普通</Button>
            <Button size="small" theme="link">小小小</Button>
            </div>
            <div>
            <Button size="big" theme="text">大大大</Button>
            <Button theme="text">普普通</Button>
            <Button size="small" theme="text">小小小</Button>
            </div>
        </div>

        <h2>示例3</h2>
        <div>
            <div>
                <Button level="main">主要按钮</Button>
                <Button>普通按钮</Button>
                <Button level="danger">危险按钮</Button>
            </div>
            <div>
                <Button theme="link" level="main">主要链接按钮</Button>
                <Button theme="link">普通链接按钮</Button>
                <Button theme="link" level="danger">危险链接按钮</Button>
            </div>
            <div>
                <Button theme="text" level="main">主要文字按钮</Button>
                <Button theme="text">普通文字按钮</Button>
                <Button theme="text" level="danger">危险文字按钮</Button>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
    name:'ButtonDemo',
    components: { Button },
}
</script>