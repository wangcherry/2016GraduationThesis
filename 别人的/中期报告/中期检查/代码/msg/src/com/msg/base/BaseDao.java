package com.msg.base;

import java.io.Serializable;
import java.util.List;
import com.msg.common.Pager;

public interface BaseDao<T,PK extends Serializable> {
	/**
	 * 增加操作	
	 * @param entity
	 */
	public void add(T entity);
	
	/**
	 * 获取列表
	 * @return
	 */
	public List<T> getAll();
	/**
	 * 有条件取得列
	 * @return
	 */
	public List<T> getList(PK pk);
	/**
	 * 获取�?��
	 * @param pk
	 * @return
	 */
	public T getOne(PK pk);
	
	/**
	    * 分页
	    * @param pageNo
	    * @param pageSize
	    * @return
	    */
	public Pager<T> findByPage(int pageNo,int pageSize);
	
	/**
	 * 删除
	 * @param pk
	 */
	public void deleteOne(PK pk);
	
	/**
	 * 删除全部
	 */
	public void deleteAll(PK pk);
	
	/**
	 * 修改
	 * @param entity
	 */
	public void update(T entity);
	
	public void update1(T entity);
	
	/**
	 * 查找判断
	 * @param entity
	 * @return
	 */
	public T findOne(T entity,String operator);
	
	/**
	 * 通过多项参数获取列表
	 */
	public List<T> getListByValue(T entity,String operator);

	/**
	 * 自定义操作通过多项参数获取int值
	 * @param entityClass
	 * @param key
	 * @return
	 */
	public int getTotalNum(T entityClass, Object key);

	/**
	 * 通过多项参数获取列表
	 * @param entity
	 * @return
	 */
	public List<T> getListByentity(T entity);

	/**
	 * 自定义操作通过多项参数获取int值
	 * @param entity
	 * @param operator
	 * @return
	 */
	public int countByCondition(T entity,String operator);
	
}
