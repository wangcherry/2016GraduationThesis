package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import bean.InsertUpdateDelBean;

public class LostServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public LostServlet() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		response.setContentType("text/html;charset=gb2312");
		request.setCharacterEncoding("gb2312");
		
		HttpSession session = request.getSession();
		ArrayList userslogin = (ArrayList)session.getAttribute("userslogin");
		int responseText = 0;
		if(userslogin == null || userslogin.size() == 0){
			responseText = -1;
		}else{
			String args[] = {"pickname","picktraint","pickplace","picktime","storeplace","storetime","handway","type"};
			String row = "";
			String val = "";
			for(int i = 0;i < args.length;i++){
				if(i == args.length-1){
					row += args[i]+",users";
					val += "'"+request.getParameter(args[i])+"','"+userslogin.get(0)+"'";
				}else{
					row += args[i]+",";
					val += "'"+request.getParameter(args[i])+"',";
				}
			}
			String sql = "insert into lost("+row+") values("+val+")";
			InsertUpdateDelBean ib = new InsertUpdateDelBean();
			responseText = ib.insertANDupdateANDdel(sql);
		}
		
		PrintWriter out = response.getWriter();
		out.print(responseText);
		out.close();
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
