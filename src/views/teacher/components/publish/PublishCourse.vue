<template>
    <div class="container">
        <el-form>
            <el-container style = "margin-left:10px;" class="detail-desc">
                <el-card class="box-card">
                    <el-form
                            ref="bookInfo"
                            label-width="100px"
                            :model="bookInfo"
                            style="margin-right: 30px; margin-top:20px"
                            :rules="rules">
                        <el-form-item label="课程名称" prop="name" >
                            <el-input v-model="bookInfo.name" placeholder="请输入书名"></el-input>
                        </el-form-item>
                        <el-form-item label="课程编号" prop="writer" >
                            <el-input v-model="bookInfo.writer" placeholder="请输入作者名"></el-input>
                        </el-form-item>
                        <el-form-item label="授课教师" prop="publisher" >
                            <el-input v-model="bookInfo.publisher" placeholder="请输入出版商名"></el-input>
                        </el-form-item>
                        <el-form-item label="最大人数" prop="isbn" >
                            <el-input v-model="bookInfo.isbn" placeholder="请输入书籍ISBN" ></el-input>
                        </el-form-item>
                        <el-form-item label="时间段选择" prop="date" >
                            <div>
                                <el-dropdown>
                                    <span class="el-dropdown-link">
                                         下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>周一</el-dropdown-item>
                                        <el-dropdown-item>周二</el-dropdown-item>
                                        <el-dropdown-item>周三</el-dropdown-item>
                                        <el-dropdown-item>周四</el-dropdown-item>
                                        <el-dropdown-item>周五</el-dropdown-item>
                                        <el-dropdown-item>周六</el-dropdown-item>
                                        <el-dropdown-item>周日</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </el-form-item>
                        <el-form-item label="库存" prop="inventory" >
                            <el-input v-model="bookInfo.inventory" placeholder="请输入库存" ></el-input>
                        </el-form-item>
                        <el-form-item label="价格" prop="price" >
                            <el-input v-model="bookInfo.price"  placeholder="请输入书籍价格（您的输入会自动格式化到小数点后两位）"></el-input>
                        </el-form-item>
                        <el-form-item  style="margin-top:20px;">
                            <span class="detail-bottom-area" v-if="!(bookInfo.id == null || bookInfo.id == '')">
                                <el-button round
                                           type="success"
                                           icon="el-icon-check"
                                ><span style="letter-spacing: 1px;"> 确认修改</span></el-button>
                                <el-button round
                                           type="warning"
                                           icon="el-icon-d-arrow-left"
                                ><span style="letter-spacing: 1px;"> 取消修改</span></el-button>
                            </span>
                            <span class="detail-bottom-area" v-else>
                                <el-button round
                                           type="success"
                                           icon="el-icon-check"
                                ><span style="letter-spacing: 1px;"> 确认上传</span></el-button>
                                <el-button round
                                           type="warning"
                                           icon="el-icon-d-arrow-left"
                                ><span style="letter-spacing: 1px;"> 取消上传</span></el-button>
                            </span>
                        </el-form-item>
                    </el-form>
                </el-card>

                <div class="detail-spacer"></div>

            </el-container>
        </el-form>
    </div>
</template>


<script>
export default {
    name: 'PublishCourse',
    data() {
        return {
            bookInfo:{

            },
            bookInfo2:{
                "description": "",
                "writerInfo" : "",
            },
            bookImg: [],
            num: 1,
            activeName: 'book description',
            dialogImageUrl: '',
            dialogVisible: false,
            urlIdx: 0,
            realImgs:[],
            rules :{
                name: [
                    { required: true, message: '请输入书名', trigger: 'blur' },
                    { min: 1, max: 44, message: '长度在 4 到 44 个字符', trigger: 'blur' }
                ],
                writer:[
                    { required: true, message: '请输入作者名', trigger: 'blur' },
                    { min: 1, max: 44, message: '长度在 4 到 44 个字符', trigger: 'blur' }
                ],
                publisher:[
                    { required: true, message: '请输入出版社名', trigger: 'blur' },
                    { min: 1, max: 44, message: '长度在 4 到 44 个字符', trigger: 'blur' }
                ],
                isbn:[
                    { required: true, message: '请输入ISBN', trigger: 'blur' },
                    { type: 'number', message: '您的输入含非法字符'},
                ],
                date:[
                    { required: true, message: '请选择出版日期', trigger: 'change' }
                ],
                inventory:[
                    { required: true, message: '请输入剩余库存', trigger: 'blur' },
                    { type: 'number', message: '您的输入含非法字符'},
                ],
                price:[
                    { required: true, message: '请输入出售价格', trigger: 'blur' },
                    { type: 'number', message: '该输入将格式化到小数点后两位'},
                ],
                description:[
                    { required: true, message: '请输入内容简介', trigger: 'blur' },
                    { min: 6, max: 500, message: '长度应为 6 到 500 个字符', trigger: 'blur' }
                ],
                writerInfo:[
                    { required: true, message: '请输入作者简介', trigger: 'blur' },
                    { min: 6, max: 500, message: '长度应为 6 到 500 个字符', trigger: 'blur' }
                ],
            }
        }
    }
}
</script>
