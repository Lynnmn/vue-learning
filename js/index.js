import data from '../data/data.json'
import Vue from './vue.js'
import styles from '../css/main.css'

var vm_table = new Vue({
	el:'.main',
	data: {
		items:data.items,
		newInfo:{
			name:'',
			age:'',
			sex:'',
			city:''
		}
	},
	methods:{
		deleteInfo: function(index){
			this.items.splice(index,1);
		},
		addInfo: function(index){
			this.items.push(this.newInfo)
		}
	}
})