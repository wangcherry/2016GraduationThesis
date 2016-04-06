package com.msg.base;

import java.io.Serializable;
import java.util.List;
import javax.annotation.Resource;

import com.msg.common.GetEntityClassUtil;
import com.msg.common.Pager;
import com.msg.dao.Idao;

public abstract class AbstractBaseDao<T, PK extends Serializable> implements
		BaseDao<T, PK> {
	Class entityClass = GetEntityClassUtil.getEntityClass(getClass());
	
	@Resource
	private Idao<T, Serializable> idao;
	/**
	 * 增加操作	
	 * @param entity
	 */
	public void add(T entity) {
		idao.add(entity);
	}
	
	/**
	 * 获取列表
	 * @return
	 */
	public List<T> getAll() {
		return idao.getAll(entityClass);
	}
	/**
	 * 有条件取得列	 * @return
	 */
	public List<T> getList(PK pk) {
		return idao.getList(entityClass, pk);
	}
	
	/**
	 * 获取
	 * @param pk
	 * @return
	 */
	public T getOne(PK pk) {
		return idao.getOne(entityClass, pk);
	}
	
	/**
	    * 分页
	    * @param pageNo
	    * @param pageSize
	    * @return
	    */
	public Pager<T> findByPage(int pageNo,int pageSize) {
		return null;
	}
	
	/**
	 * 删除
	 * @param pk
	 */
	public void deleteOne(PK pk) {
		idao.deleteOne(entityClass, pk);
	}
	
	/**
	 * 删除某类型的全部
	 */
	public void deleteAll(PK pk) {
		idao.deleteAll(entityClass, pk);
	}
	
	/**
	 * 修改
	 * @param entity
	 */
	public void update(T entity) {
		idao.update(entity);
	}
	
	public void update1(T entity) {
		idao.update1(entity);
	}
	
	public T findOne(T entity,String operator){
		return idao.findOne(entity,operator);
	}
	
	public List<T> getListByValue(T entity,String operator){
		return idao.getListByValue(entity,operator);
	}
	
	public List<T> getListByentity(T entity){
		return idao.getListByentity(entity);
	}
	public int getTotalNum(T entityClass, Object key){
		return idao.getTotalNum(entityClass, key);
	}
	public int countByCondition(T entity,String operator)
	{
		return idao.countByCondition(entity, operator);
	}
	
}
