package bean;

import java.util.ArrayList;

public class AllBean {
	SelectBean sb = new SelectBean();
	ArrayList al = null;
	
	public ArrayList getAllAdmin(String id){
		String sql = "select * from admin where id!=1 and id!="+id+" order by id desc";
		String args[] = {"id","name","pwd","status"};
		al = sb.select(sql, args);
		return al;
	}
	
	public ArrayList getUsers(String id){
		String sql = "select * from users where id="+id;
		String args[] = {"id","name","pwd","number","college","classes","truename","phone","address","email","status"};
		al = sb.selectRow(args, sql);
		return al;
	}
	
	public ArrayList getUsers(){
		String sql = "select * from users order by id desc";
		String args[] = {"id","name","pwd","number","college","classes","truename","phone","address","email","status"};
		al = sb.select(sql, args);
		return al;
	}
	
	public ArrayList getLost(String id){
		String sql = "select * from lost where id="+id;
		String args[] = {"id","users","pickname","picktraint","pickplace","picktime","storeplace","storetime","handway","handintime","type"};
		al = sb.selectRow(args, sql);
		return al;
	}
	
	public ArrayList getLost(){
		String sql = "select * from lost order by id desc";
		String args[] = {"id","users","pickname","picktraint","pickplace","picktime","storeplace","storetime","handway","handintime","type"};
		al = sb.select(sql, args);
		return al;
	}
	
	public ArrayList getLostType(String type){
		String sql = "select * from lost where type='"+type+"' order by id desc";
		String args[] = {"id","users","pickname","picktraint","pickplace","picktime","storeplace","storetime","handway","handintime","type"};
		al = sb.select(sql, args);
		return al;
	}
	
	public ArrayList getLostUsers(String users){
		String sql = "select * from lost where users="+users+" order by id desc";
		String args[] = {"id","users","pickname","picktraint","pickplace","picktime","storeplace","storetime","handway","handintime","type"};
		al = sb.select(sql, args);
		return al;
	}
	
	public ArrayList getLostSearch(String pickname,String type){
		String sql = "select * from lost where pickname like '%"+pickname+"%' and type='"+type+"' order by id desc";
		String args[] = {"id","users","pickname","picktraint","pickplace","picktime","storeplace","storetime","handway","handintime","type"};
		al = sb.select(sql, args);
		return al;
	}
	
	public ArrayList getLeave(String id){
		String sql = "select * from leave where id="+id;
		String args[] = {"id","lost","name","content","dates"};
		al = sb.selectRow(args, sql);
		return al;
	}
	
	public ArrayList getLeave(){
		String sql = "select * from leave order by id desc";
		String args[] = {"id","lost","name","content","dates"};
		al = sb.select(sql, args);
		return al;
	}
	
	public ArrayList getLeaveLost(String lost){
		String sql = "select * from leave where lost="+lost+" order by id desc";
		String args[] = {"id","lost","name","content","dates"};
		al = sb.select(sql, args);
		return al;
	}
}
